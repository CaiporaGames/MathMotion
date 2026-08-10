import type {
    BalanceScenario,
} from "../types/balance.types";

export const balanceLabScenario:
    BalanceScenario = {

    left: {
        boxCount: 2,
        knownWeight: 2,
    },

    right: {
        boxCount: 0,
        knownWeight: 10,
    },

    /*
     * Informação escondida do aluno.
     *
     * Serve apenas para a simulação
     * saber quando existe equilíbrio.
     */
    hiddenBoxWeight: 4,
};