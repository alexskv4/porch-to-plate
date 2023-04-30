import type { Food } from "./foodbanks";

export type Donation = {
    food: Food[]
    longitude: number,
    latitude: number
}

export const donations: Donation[] = [
    {
        food: [
            {
                name: "Apple",
                servings: 1
            }
        ],
        longitude: -123.37561595647762,        
        latitude: 48.419262297922884
    },
    {
        food: [
            {
                name: "Bagels",
                servings: 3
            }
        ],
        longitude: -123.3859864741105,     
        latitude: 48.431341976696615
    },
    {
        food: [
            {
                name: "Celery",
                servings: 8
            },
            {
                name: "Broccoli",
                servings: 7
            },
            {
                name: "Carrot",
                servings: 5
            }
        ],
        longitude: -123.49153830688093,      
        latitude: 48.43127567814039
    },
    {
        food: [
            {
                name: "Lays Classic",
                servings: 8
            },
            {
                name: "Ravioli",
                servings: 7
            },
            {
                name: "Wonton Soup",
                servings: 1
            }
        ],
        longitude: -123.46214630905004,
        latitude: 48.45343907775884
    },
    {
        food: [
            {
                name: "French Toast",
                servings: 2
            }
        ],
        longitude: -123.44364040478105,      
        latitude: 48.45553291118363
    },
    {
        food: [
            {
                name: "Pizza",
                servings: 5
            }
        ],
        longitude: -123.49250922754095,      
        latitude: 48.40864877438547
    }
]