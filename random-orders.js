/* =========================================================
   RANDOM CUSTOMIZED ORDER ENGINE
   RushBite POS Trainer
   ========================================================= */

(() => {
    "use strict";

    /*
     * This engine creates realistic customer orders.
     *
     * It is deliberately separate from index.html so the
     * main HTML file doesn't become unnecessarily huge.
     */

    const RandomOrders = {

        /* -----------------------------------------------------
           CUSTOMER NAMES
        ----------------------------------------------------- */

        names: [
            "Arjun",
            "Aarav",
            "Ananya",
            "Diya",
            "Rohan",
            "Meera",
            "Kavin",
            "Nisha",
            "Rahul",
            "Ishita",
            "Aditya",
            "Priya",
            "Vikram",
            "Sneha",
            "Dev",
            "Karthik",
            "Aisha",
            "Riya",
            "Sanjay",
            "Neha",
            "Varun",
            "Tara",
            "Kabir",
            "Anjali"
        ],

        /* -----------------------------------------------------
           MODES
        ----------------------------------------------------- */

        modes: [
            "Dine In",
            "Takeaway",
            "Drive-Thru",
            "Delivery"
        ],

        /* -----------------------------------------------------
           MENU DATABASE
        ----------------------------------------------------- */

        menu: {

            burgers: [
                {
                    id: "classic-burger",
                    name: "Classic Burger",
                    price: 129,
                    category: "Burgers"
                },
                {
                    id: "cheeseburger",
                    name: "Cheeseburger",
                    price: 149,
                    category: "Burgers"
                },
                {
                    id: "double-cheese",
                    name: "Double Cheeseburger",
                    price: 199,
                    category: "Burgers"
                },
                {
                    id: "crispy-chicken",
                    name: "Crispy Chicken Burger",
                    price: 179,
                    category: "Burgers"
                },
                {
                    id: "spicy-chicken",
                    name: "Spicy Chicken Burger",
                    price: 169,
                    category: "Burgers"
                }
            ],

            sides: [
                {
                    id: "fries-small",
                    name: "Fries",
                    size: "Small",
                    price: 79
                },
                {
                    id: "fries-medium",
                    name: "Fries",
                    size: "Medium",
                    price: 99
                },
                {
                    id: "fries-large",
                    name: "Fries",
                    size: "Large",
                    price: 119
                },
                {
                    id: "peri-fries",
                    name: "Peri Peri Fries",
                    size: "Medium",
                    price: 119
                },
                {
                    id: "nuggets-6",
                    name: "Chicken Nuggets",
                    size: "6 pc",
                    price: 129
                },
                {
                    id: "nuggets-10",
                    name: "Chicken Nuggets",
                    size: "10 pc",
                    price: 189
                }
            ],

            drinks: [
                {
                    id: "coke-small",
                    name: "Coke",
                    size: "Small",
                    price: 59
                },
                {
                    id: "coke-medium",
                    name: "Coke",
                    size: "Medium",
                    price: 69
                },
                {
                    id: "coke-large",
                    name: "Coke",
                    size: "Large",
                    price: 79
                },
                {
                    id: "sprite-medium",
                    name: "Sprite",
                    size: "Medium",
                    price: 69
                },
                {
                    id: "sprite-large",
                    name: "Sprite",
                    size: "Large",
                    price: 79
                },
                {
                    id: "fanta-medium",
                    name: "Fanta",
                    size: "Medium",
                    price: 69
                },
                {
                    id: "iced-tea",
                    name: "Iced Tea",
                    size: "Medium",
                    price: 79
                }
            ],

            wraps: [
                {
                    id: "crispy-wrap",
                    name: "Crispy Chicken Wrap",
                    price: 159
                },
                {
                    id: "spicy-paneer-wrap",
                    name: "Spicy Paneer Wrap",
                    price: 149
                }
            ],

            chicken: [
                {
                    id: "chicken-2pc",
                    name: "Crispy Chicken",
                    size: "2 pc",
                    price: 169
                },
                {
                    id: "chicken-4pc",
                    name: "Crispy Chicken",
                    size: "4 pc",
                    price: 299
                }
            ],

            desserts: [
                {
                    id: "soft-serve",
                    name: "Soft Serve",
                    price: 69
                },
                {
                    id: "chocolate-sundae",
                    name: "Chocolate Sundae",
                    price: 99
                },
                {
                    id: "brownie-sundae",
                    name: "Brownie Sundae",
                    price: 139
                }
            ],

            shakes: [
                {
                    id: "vanilla-shake",
                    name: "Vanilla Shake",
                    price: 129
                },
                {
                    id: "chocolate-shake",
                    name: "Chocolate Shake",
                    price: 139
                },
                {
                    id: "strawberry-shake",
                    name: "Strawberry Shake",
                    price: 139
                }
            ],

            cafe: [
                {
                    id: "americano",
                    name: "Americano",
                    price: 99
                },
                {
                    id: "cappuccino",
                    name: "Cappuccino",
                    price: 129
                },
                {
                    id: "latte",
                    name: "Latte",
                    price: 139
                }
            ]
        },

        /* -----------------------------------------------------
           MODIFIERS
        ----------------------------------------------------- */

        modifiers: {

            burger: [
                {
                    id: "no-onions",
                    label: "No onions",
                    price: 0
                },
                {
                    id: "no-pickles",
                    label: "No pickles",
                    price: 0
                },
                {
                    id: "no-sauce",
                    label: "No sauce",
                    price: 0
                },
                {
                    id: "extra-cheese",
                    label: "Extra cheese",
                    price: 25
                },
                {
                    id: "jalapenos",
                    label: "Jalapeños",
                    price: 15
                },
                {
                    id: "extra-sauce",
                    label: "Extra sauce",
                    price: 10
                }
            ],

            fries: [
                {
                    id: "extra-salt",
                    label: "Extra salt",
                    price: 0
                },
                {
                    id: "no-salt",
                    label: "No salt",
                    price: 0
                },
                {
                    id: "extra-seasoning",
                    label: "Extra seasoning",
                    price: 10
                }
            ],

            drink: [
                {
                    id: "no-ice",
                    label: "No ice",
                    price: 0
                },
                {
                    id: "less-ice",
                    label: "Less ice",
                    price: 0
                }
            ]
        },

        /* -----------------------------------------------------
           UTILITY FUNCTIONS
        ----------------------------------------------------- */

        random(array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        chance(probability) {
            return Math.random() < probability;
        },

        randomQuantity(max = 2) {
            return Math.floor(Math.random() * max) + 1;
        },

        clone(object) {
            return JSON.parse(JSON.stringify(object));
        },

        /* -----------------------------------------------------
           GET ALL MENU ITEMS
        ----------------------------------------------------- */

        allItems() {

            return [
                ...this.menu.burgers,
                ...this.menu.sides,
                ...this.menu.drinks,
                ...this.menu.wraps,
                ...this.menu.chicken,
                ...this.menu.desserts,
                ...this.menu.shakes,
                ...this.menu.cafe
            ];
        },

        /* -----------------------------------------------------
           CREATE A NORMAL ITEM
        ----------------------------------------------------- */

        createItem(item, quantity = 1) {

            const modifiers = [];

            if (
                item.category === "Burgers" &&
                this.chance(0.45)
            ) {

                const possible =
                    this.modifiers.burger;

                modifiers.push(
                    this.random(possible)
                );
            }

            if (
                item.name === "Fries" &&
                this.chance(0.35)
            ) {

                modifiers.push(
                    this.random(this.modifiers.fries)
                );
            }

            if (
                ["Coke", "Sprite", "Fanta", "Iced Tea"]
                    .includes(item.name) &&
                this.chance(0.40)
            ) {

                modifiers.push(
                    this.random(this.modifiers.drink)
                );
            }

            return {
                type: "item",

                id: item.id,

                name: item.name,

                size: item.size || null,

                quantity,

                basePrice: item.price,

                modifiers,

                total: this.calculateItemPrice(
                    item,
                    modifiers,
                    quantity
                )
            };
        },

        /* -----------------------------------------------------
           PRICE CALCULATION
        ----------------------------------------------------- */

        calculateItemPrice(
            item,
            modifiers,
            quantity
        ) {

            let price = item.price;

            modifiers.forEach(modifier => {
                price += modifier.price;
            });

            return price * quantity;
        },

        /* -----------------------------------------------------
           COMBO BUILDER
        ----------------------------------------------------- */

        createCombo() {

            const main =
                this.random(this.menu.burgers);

            const side =
                this.random(
                    this.menu.sides.filter(
                        side =>
                            side.id === "fries-medium" ||
                            side.id === "fries-large"
                    )
                );

            const drink =
                this.random(
                    this.menu.drinks.filter(
                        drink =>
                            drink.id.includes("medium")
                    )
                );

            const extras = [];

            if (this.chance(0.35)) {

                extras.push(
                    this.random(
                        this.modifiers.burger.filter(
                            modifier =>
                                modifier.price > 0
                        )
                    )
                );
            }

            const combo = {

                type: "combo",

                id:
                    "combo-" +
                    Date.now() +
                    "-" +
                    Math.floor(Math.random() * 1000),

                name:
                    main.name + " Meal",

                main: {
                    id: main.id,
                    name: main.name
                },

                side: {
                    id: side.id,
                    name: side.name,
                    size: side.size
                },

                drink: {
                    id: drink.id,
                    name: drink.name,
                    size: drink.size
                },

                extras,

                quantity: 1,

                basePrice: 249,

                modifiers: [],

                total: 249
            };

            /*
             * Size upgrade
             */

            if (side.id === "fries-large") {
                combo.total += 20;
            }

            /*
             * Extra modifiers
             */

            extras.forEach(extra => {
                combo.total += extra.price;
            });

            return combo;
        },

        /* -----------------------------------------------------
           ORDER GENERATION
        ----------------------------------------------------- */

        generateOrder() {

            const orderType =
                Math.random();

            if (orderType < 0.35) {

                return this.generateSimpleOrder();

            } else if (orderType < 0.70) {

                return this.generateCustomizedOrder();

            } else if (orderType < 0.90) {

                return this.generateMultiItemOrder();

            } else {

                return this.generateChaosOrder();
            }
        },

        /* -----------------------------------------------------
           SIMPLE ORDER
        ----------------------------------------------------- */

        generateSimpleOrder() {

            const itemPool = [
                ...this.menu.burgers,
                ...this.menu.wraps,
                ...this.menu.chicken,
                ...this.menu.desserts,
                ...this.menu.shakes,
                ...this.menu.cafe
            ];

            const item =
                this.random(itemPool);

            return [
                this.createItem(item)
            ];
        },

        /* -----------------------------------------------------
           CUSTOMIZED ORDER
        ----------------------------------------------------- */

        generateCustomizedOrder() {

            const style =
                Math.random();

            if (style < 0.50) {

                return [
                    this.createItem(
                        this.random(this.menu.burgers)
                    )
                ];

            }

            if (style < 0.80) {

                return [
                    this.createCombo()
                ];

            }

            return [
                this.createItem(
                    this.random(this.menu.wraps)
                ),
                this.createItem(
                    this.random(this.menu.drinks)
                )
            ];
        },

        /* -----------------------------------------------------
           MULTI ITEM ORDER
        ----------------------------------------------------- */

        generateMultiItemOrder() {

            const items = [];

            const count =
                Math.floor(
                    Math.random() * 3
                ) + 2;

            const pool =
                this.allItems();

            for (let i = 0; i < count; i++) {

                const item =
                    this.random(pool);

                items.push(
                    this.createItem(
                        item,
                        this.chance(0.15)
                            ? 2
                            : 1
                    )
                );
            }

            return items;
        },

        /* -----------------------------------------------------
           CHAOS ORDER
        ----------------------------------------------------- */

        generateChaosOrder() {

            const items = [];

            const burger =
                this.random(
                    this.menu.burgers
                );

            const burgerItem =
                this.createItem(burger);

            /*
             * Force multiple modifications
             */

            burgerItem.modifiers = [
                {
                    id: "no-onions",
                    label: "No onions",
                    price: 0
                },
                {
                    id: "extra-cheese",
                    label: "Extra cheese",
                    price: 25
                }
            ];

            burgerItem.total =
                burger.price + 25;

            items.push(burgerItem);

            /*
             * Add fries
             */

            const fries =
                this.createItem(
                    this.menu.sides.find(
                        x =>
                            x.id === "fries-large"
                    )
                );

            fries.modifiers = [
                {
                    id: "extra-seasoning",
                    label: "Extra seasoning",
                    price: 10
                }
            ];

            fries.total = 129;

            items.push(fries);

            /*
             * Add drink
             */

            const drink =
                this.createItem(
                    this.menu.drinks.find(
                        x =>
                            x.id === "coke-medium"
                    )
                );

            drink.modifiers = [
                {
                    id: "no-ice",
                    label: "No ice",
                    price: 0
                }
            ];

            items.push(drink);

            return items;
        },

        /* -----------------------------------------------------
           CREATE CUSTOMER
        ----------------------------------------------------- */

        generateCustomer() {

            const customer = {

                id:
                    "CUST-" +
                    Date.now() +
                    "-" +
                    Math.floor(
                        Math.random() * 9999
                    ),

                name:
                    this.random(
                        this.names
                    ),

                mode:
                    this.random(
                        this.modes
                    ),

                patience:
                    Math.floor(
                        Math.random() * 61
                    ) + 120,

                items:
                    this.generateOrder(),

                createdAt:
                    Date.now()
            };

            customer.request =
                this.createCustomerRequest(
                    customer
                );

            customer.total =
                this.calculateOrderTotal(
                    customer.items
                );

            return customer;
        },

        /* -----------------------------------------------------
           TOTAL
        ----------------------------------------------------- */

        calculateOrderTotal(items) {

            return items.reduce(
                (total, item) =>
                    total + item.total,
                0
            );
        },

        /* -----------------------------------------------------
           HUMAN CUSTOMER LANGUAGE
        ----------------------------------------------------- */

        createCustomerRequest(customer) {

            const items =
                customer.items;

            if (items.length === 1) {

                const item =
                    items[0];

                if (item.type === "combo") {

                    return this.comboSentence(
                        item
                    );
                }

                return this.itemSentence(
                    item
                );
            }

            return this.multiItemSentence(
                items
            );
        },

        /* -----------------------------------------------------
           SINGLE ITEM SENTENCE
        ----------------------------------------------------- */

        itemSentence(item) {

            let sentence =
                "I'll have ";

            if (item.quantity > 1) {

                sentence +=
                    item.quantity + " ";
            }

            sentence += item.name;

            if (item.size) {

                sentence +=
                    ", " + item.size;
            }

            if (
                item.modifiers &&
                item.modifiers.length
            ) {

                sentence +=
                    " — " +
                    item.modifiers
                        .map(
                            modifier =>
                                modifier.label
                        )
                        .join(", ");
            }

            sentence += ".";

            return sentence;
        },

        /* -----------------------------------------------------
           COMBO SENTENCE
        ----------------------------------------------------- */

        comboSentence(combo) {

            let sentence =
                "Can I get a " +
                combo.main.name +
                " meal";

            sentence +=
                ", " +
                combo.side.size +
                " fries";

            sentence +=
                " and a " +
                combo.drink.size +
                " " +
                combo.drink.name;

            if (
                combo.extras &&
                combo.extras.length
            ) {

                sentence +=
                    ", plus " +
                    combo.extras
                        .map(
                            extra =>
                                extra.label
                        )
                        .join(", ");
            }

            sentence += ".";

            return sentence;
        },

        /* -----------------------------------------------------
           MULTI ITEM SENTENCE
        ----------------------------------------------------- */

        multiItemSentence(items) {

            const phrases =
                items.map(item => {

                    if (
                        item.type === "combo"
                    ) {

                        return this.comboSentence(
                            item
                        );
                    }

                    return this.itemSentence(
                        item
                    );
                });

            if (phrases.length === 2) {

                return (
                    "I'll take " +
                    phrases[0]
                        .replace(/\.$/, "") +
                    " and " +
                    phrases[1]
                );
            }

            return (
                "I'll take " +
                phrases
                    .join(" ")
            );
        },

        /* -----------------------------------------------------
           DISPLAY FORMATTER
        ----------------------------------------------------- */

        formatItem(item) {

            if (item.type === "combo") {

                let text =
                    item.name +
                    " (" +
                    item.side.size +
                    " fries, " +
                    item.drink.size +
                    " " +
                    item.drink.name;

                if (
                    item.extras &&
                    item.extras.length
                ) {

                    text +=
                        ", " +
                        item.extras
                            .map(
                                x =>
                                    x.label
                            )
                            .join(", ");
                }

                text += ")";

                return text;
            }

            let text =
                item.quantity +
                "x " +
                item.name;

            if (item.size) {

                text +=
                    " (" +
                    item.size +
                    ")";
            }

            if (
                item.modifiers &&
                item.modifiers.length
            ) {

                text +=
                    " — " +
                    item.modifiers
                        .map(
                            x =>
                                x.label
                        )
                        .join(", ");
            }

            return text;
        },

        /* -----------------------------------------------------
           ORDER VALIDATION
        ----------------------------------------------------- */

        normalizeItem(item) {

            if (item.type === "combo") {

                return {
                    type: "combo",

                    main:
                        item.main.id,

                    side:
                        item.side.id,

                    drink:
                        item.drink.id,

                    extras:
                        (item.extras || [])
                            .map(
                                x => x.id
                            )
                            .sort(),

                    quantity:
                        item.quantity || 1
                };
            }

            return {

                type: "item",

                id: item.id,

                size: item.size || null,

                quantity:
                    item.quantity || 1,

                modifiers:
                    (item.modifiers || [])
                        .map(
                            x => x.id
                        )
                        .sort()
            };
        },

        orderMatches(
            expectedItems,
            actualItems
        ) {

            if (
                expectedItems.length !==
                actualItems.length
            ) {

                return false;
            }

            const expected =
                expectedItems
                    .map(item =>
                        JSON.stringify(
                            this.normalizeItem(
                                item
                            )
                        )
                    )
                    .sort();

            const actual =
                actualItems
                    .map(item =>
                        JSON.stringify(
                            this.normalizeItem(
                                item
                            )
                        )
                    )
                    .sort();

            return (
                JSON.stringify(expected) ===
                JSON.stringify(actual)
            );
        }
    };

    /* ---------------------------------------------------------
       EXPOSE GLOBALLY
    --------------------------------------------------------- */

    window.RandomOrders =
        RandomOrders;

    console.log(
        "Randomized POS order engine loaded."
    );

})();
