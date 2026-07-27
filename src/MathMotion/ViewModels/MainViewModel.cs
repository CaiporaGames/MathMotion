using System;
using System.Collections.Generic;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MathMotion.Models;
using MathMotion.Services;

namespace MathMotion.ViewModels;

public partial class MainViewModel : ViewModelBase
{
    private readonly FunctionSampler _functionSampler = new();

    /*
     * Texto que está dentro da caixa de entrada.
     */
    [ObservableProperty]
    private string _functionExpression = "x^2";

    /*
     * Pontos que serão desenhados pelo GraphCanvas.
     */
    [ObservableProperty]
    private IReadOnlyList<GraphPoint> _graphPoints =
        Array.Empty<GraphPoint>();

    /*
     * Mensagem apresentada quando a expressão é inválida.
     */
    [ObservableProperty]
    private string _errorMessage = string.Empty;

    public MainViewModel()
    {
        /*
         * Desenha x^2 quando a aplicação é aberta.
         */
        DrawFunction();
    }

    [RelayCommand]
    private void DrawFunction()
    {
        const double minimumX = -10;
        const double maximumX = 10;
        const double step = 0.02;

        var success = _functionSampler.TrySample(
            FunctionExpression,
            minimumX,
            maximumX,
            step,
            out var points,
            out var errorMessage
        );

        if (!success)
        {
            GraphPoints = Array.Empty<GraphPoint>();
            ErrorMessage = errorMessage;

            return;
        }

        GraphPoints = points;
        ErrorMessage = string.Empty;
    }
}