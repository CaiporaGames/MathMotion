import {
    MeasurementGrowthExplorerController,
} from "@/features/measurement-growth/controllers/MeasurementGrowthExplorerController";

export default function ScaleLabPage() {

    return (
        <main
            style={{
                padding: 30,
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >

            <MeasurementGrowthExplorerController

                id="scale-lab"

                config={{

                    shape:
                        "circle",

                    unit:
                        "cm",

                    labelA:
                        "Pizza A",

                    labelB:
                        "Pizza B",

                    initialA:
                        20,

                    initialB:
                        30,

                    range: {
                        min: 10,
                        max: 50,
                        step: 1,
                    },

                    priceA:
                        6,

                    priceB:
                        10,

                    currency:
                        "€",
                }}
            />

        </main>
    );
}