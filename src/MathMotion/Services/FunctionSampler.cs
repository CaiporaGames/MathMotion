using System;
using System.Collections.Generic;
using AngouriMath;
using MathMotion.Models;

namespace MathMotion.Services;

/// <summary>
/// Interpreta uma expressão matemática e gera pontos
/// que poderão ser desenhados no gráfico.
/// </summary>
public sealed class FunctionSampler
{
    public bool TrySample(
        string expressionText,
        double minimumX,
        double maximumX,
        double step,
        out IReadOnlyList<GraphPoint> points,
        out string errorMessage)
    {
        points = Array.Empty<GraphPoint>();
        errorMessage = string.Empty;

        if (string.IsNullOrWhiteSpace(expressionText))
        {
            errorMessage = "Escreva uma função antes de desenhar.";
            return false;
        }

        if (step <= 0)
        {
            errorMessage = "O intervalo entre os pontos deve ser positivo.";
            return false;
        }

        if (minimumX >= maximumX)
        {
            errorMessage = "O valor mínimo de x deve ser menor que o máximo.";
            return false;
        }

        try
        {
            /*
             * Transforma o texto em uma expressão matemática.
             *
             * Exemplo:
             *
             * "x^2" deixa de ser apenas uma string
             * e passa a ser uma árvore matemática.
             */
            Entity expression = MathS.FromString(expressionText);

            /*
             * Compila a expressão como uma função:
             *
             * double x -> double y
             *
             * Em termos matemáticos:
             *
             * f: R -> R
             */
            var compiledFunction =
                expression.Compile<double, double>("x");

            var sampledPoints = new List<GraphPoint>();

            for (
                var x = minimumX;
                x <= maximumX + step / 2.0;
                x += step)
            {
                var y = TryEvaluate(compiledFunction, x);

                sampledPoints.Add(
                    new GraphPoint(x, y)
                );
            }

            points = sampledPoints;

            return true;
        }
        catch (Exception exception)
        {
            errorMessage =
                $"Não foi possível interpretar a função: {exception.Message}";

            return false;
        }
    }

    private static double TryEvaluate(
        Func<double, double> function,
        double x)
    {
        try
        {
            var y = function(x);

            if (!double.IsFinite(y))
            {
                return double.NaN;
            }

            return y;
        }
        catch
        {
            /*
             * Algumas funções não existem para todos os números.
             *
             * Por exemplo:
             *
             * sqrt(x) não possui valor real quando x < 0.
             *
             * Colocamos NaN para dizer ao renderizador:
             * "não desenhe este ponto".
             */
            return double.NaN;
        }
    }
}