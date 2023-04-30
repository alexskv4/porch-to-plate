export type Food = {
    name: string,
    servings: number
}

export type Foodbank = {
    longitude: number,
    latitude: number,
    name: string,
    description: string,
    inventory: Food[]
}

export const foodbanks: Foodbank[] = [
    {
        longitude: -123.49963094175126,
        latitude: 48.44603898608772,
        name: "Goldstream Food Bank",
        description: "This is a foodbank between Goldstream and Colwood. It is wheelchair accessible.",
        inventory: [
            {
                name: "Lasagna",
                servings: 4
            },
            {
                name: "Cheese Pizza Slice",
                servings: 4
            },
            {
                name: "Granola Bar",
                servings: 7
            }
        ]
    },
    {
        longitude: -123.39485266227429,    
        latitude: 48.43364289584635, 
        name: "The Victoria Community Food Hub Society (VCFHS)",
        description: "The Victoria Community Food Hub Society (VCFHS) was incorporated as a Charity in 2013. It works hand in hand with its key partners the Capital Region Food and Agriculture Initiatives Roundtable (CRFAIR) and the Foodshare Network to promote a healthy and sustainable food system in the Capital Region.",
        inventory: [
            {
                name: "Cheetos",
                servings: 6
            },
            {
                name: "Coca-Cola Can",
                servings: 9
            },
            {
                name: "Roasted Chicken",
                servings: 4            
            }
        ]
    },
    {
        longitude: -123.38935597860494,
        latitude: 48.4358754720709,
        name: "Little Free Pantry",
        description: "A small foodbank nestled in Vic-West.",
        inventory: [
            {
                name: "Hot Dog Buns",
                servings: 8
            },
            {
                name: "Banana",
                servings: 5
            },
            {
                name: "Peach",
                servings: 1
            },
            {
                name: "Waffles",
                servings: 3
            }
        ]
    },
    {
        longitude: -123.36824867736911,
        latitude: 48.427389075645955,
        name: "Food Eco District",
        description: "A registered charity that is working to address food security in southern Vancouver Island by promoting sustainable food systems and enhancing community engagement. We do this by creating garden spaces, delivering educational programs, and advocating for urban agriculture within our community.",
        inventory: [
            {
                name: "Pineapple",
                servings: 1
            },
            {
                name: "Hot Dogs",
                servings: 8
            },
            {
                name: "Steak",
                servings: 2
            },
            {
                name: "Lollipops",
                servings: 6
            }
        ]
    },
]



 