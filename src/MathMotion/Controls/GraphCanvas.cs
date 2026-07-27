using System;
using System.Collections.Generic;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Media;
using MathMotion.Models;

namespace MathMotion.Controls;

public sealed class GraphCanvas : Control
{
    private const double GridSpacing = 50.0;

    /*
     * Propriedade que receberá os pontos vindos
     * do MainWindowViewModel.
     */
    public static readonly StyledProperty<
        IReadOnlyList<GraphPoint>?
    > PointsProperty =
        AvaloniaProperty.Register<
            GraphCanvas,
            IReadOnlyList<GraphPoint>?
        >(nameof(Points));

    public IReadOnlyList<GraphPoint>? Points
    {
        get => GetValue(PointsProperty);
        set => SetValue(PointsProperty, value);
    }

    static GraphCanvas()
    {
        /*
         * Quando Points mudar, o Avalonia chama
         * Render novamente.
         */
        AffectsRender<GraphCanvas>(PointsProperty);
    }

    public override void Render(DrawingContext context)
    {
        base.Render(context);

        var width = Bounds.Width;
        var height = Bounds.Height;

        if (width <= 0 || height <= 0)
        {
            return;
        }

        context.FillRectangle(
            Brushes.White,
            new Rect(0, 0, width, height)
        );

        var centerX = width / 2.0;
        var centerY = height / 2.0;

        DrawGrid(
            context,
            width,
            height,
            centerX,
            centerY
        );

        DrawAxes(
            context,
            width,
            height,
            centerX,
            centerY
        );

        DrawOrigin(
            context,
            centerX,
            centerY
        );

        DrawFunction(
            context,
            width,
            height,
            centerX,
            centerY
        );
    }

    private void DrawFunction(
        DrawingContext context,
        double width,
        double height,
        double centerX,
        double centerY)
    {
        if (Points is null || Points.Count < 2)
        {
            return;
        }

        var functionPen = new Pen(
            Brushes.Blue,
            2
        );

        GraphPoint? previousPoint = null;

        /*
         * Impede que o desenho saia visualmente
         * da área do controle.
         */
        using var clip = context.PushClip(
            new Rect(0, 0, width, height)
        );

        foreach (var currentPoint in Points)
        {
            if (!IsValid(currentPoint))
            {
                /*
                 * Interrompe a curva quando a função
                 * não está definida.
                 */
                previousPoint = null;
                continue;
            }

            if (previousPoint is { } previous)
            {
                var previousScreenPoint = ToScreen(
                    previous,
                    centerX,
                    centerY
                );

                var currentScreenPoint = ToScreen(
                    currentPoint,
                    centerX,
                    centerY
                );

                var verticalJump = Math.Abs(
                    currentScreenPoint.Y -
                    previousScreenPoint.Y
                );

                /*
                 * Evita desenhar uma linha atravessando
                 * uma descontinuidade como x = 0 em 1/x.
                 */
                if (verticalJump <= height * 1.5)
                {
                    context.DrawLine(
                        functionPen,
                        previousScreenPoint,
                        currentScreenPoint
                    );
                }
            }

            previousPoint = currentPoint;
        }
    }

    private static bool IsValid(GraphPoint point)
    {
        return
            double.IsFinite(point.X) &&
            double.IsFinite(point.Y);
    }

    private static Point ToScreen(
        GraphPoint mathematicalPoint,
        double centerX,
        double centerY)
    {
        var screenX =
            centerX +
            mathematicalPoint.X * GridSpacing;

        /*
         * Subtraímos y porque o eixo vertical da tela
         * cresce para baixo.
         */
        var screenY =
            centerY -
            mathematicalPoint.Y * GridSpacing;

        return new Point(
            screenX,
            screenY
        );
    }

    private static void DrawGrid(
        DrawingContext context,
        double width,
        double height,
        double centerX,
        double centerY)
    {
        var gridPen = new Pen(
            Brushes.LightGray,
            1
        );

        for (
            var screenX = centerX;
            screenX <= width;
            screenX += GridSpacing)
        {
            context.DrawLine(
                gridPen,
                new Point(screenX, 0),
                new Point(screenX, height)
            );
        }

        for (
            var screenX = centerX - GridSpacing;
            screenX >= 0;
            screenX -= GridSpacing)
        {
            context.DrawLine(
                gridPen,
                new Point(screenX, 0),
                new Point(screenX, height)
            );
        }

        for (
            var screenY = centerY;
            screenY <= height;
            screenY += GridSpacing)
        {
            context.DrawLine(
                gridPen,
                new Point(0, screenY),
                new Point(width, screenY)
            );
        }

        for (
            var screenY = centerY - GridSpacing;
            screenY >= 0;
            screenY -= GridSpacing)
        {
            context.DrawLine(
                gridPen,
                new Point(0, screenY),
                new Point(width, screenY)
            );
        }
    }

    private static void DrawAxes(
        DrawingContext context,
        double width,
        double height,
        double centerX,
        double centerY)
    {
        var axisPen = new Pen(
            Brushes.Black,
            2
        );

        context.DrawLine(
            axisPen,
            new Point(0, centerY),
            new Point(width, centerY)
        );

        context.DrawLine(
            axisPen,
            new Point(centerX, 0),
            new Point(centerX, height)
        );
    }

    private static void DrawOrigin(
        DrawingContext context,
        double centerX,
        double centerY)
    {
        context.DrawEllipse(
            Brushes.Black,
            null,
            new Point(centerX, centerY),
            4,
            4
        );
    }
}