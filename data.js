// =============================================
// BUDGET PLANNER DATABASE
// =============================================

const budgetData = {

    // =============================
    // SỞ THÍCH
    // =============================

    hobbies:{

        male:[

            {id:"football",name:"⚽ Đá bóng",cost:300000},
            {id:"gym",name:"🏋 Gym",cost:450000},
            {id:"badminton",name:"🏸 Cầu lông",cost:250000},
            {id:"running",name:"🏃 Chạy bộ",cost:100000},
            {id:"cycling",name:"🚴 Đạp xe",cost:150000},
            {id:"gaming",name:"🎮 Chơi game",cost:350000},
            {id:"fishing",name:"🎣 Câu cá",cost:200000}

        ],

        female:[

            {id:"yoga",name:"🧘 Yoga",cost:350000},
            {id:"dance",name:"💃 Dance",cost:300000},
            {id:"badminton",name:"🏸 Cầu lông",cost:250000},
            {id:"swimming",name:"🏊 Bơi",cost:300000},
            {id:"reading",name:"📚 Đọc sách",cost:200000},
            {id:"painting",name:"🎨 Vẽ",cost:180000},
            {id:"music",name:"🎵 Âm nhạc",cost:250000}

        ]

    },

    // =============================
    // HỌC SINH
    // =============================

    student:{

        male:{

            title:"Học sinh Nam (11-17 tuổi)",

            note:"Đây là độ tuổi chủ yếu sử dụng tiền tiêu vặt, phần lớn chi phí sinh hoạt đã được gia đình hỗ trợ.",

            fixed:[],

            categories:[

                {
                    name:"🍔 Ăn uống",
                    percent:30,
                    items:["Ăn sáng","Ăn vặt","Nước uống"]
                },

                {
                    name:"📚 Học tập",
                    percent:25,
                    items:["Sách","Bút","Photo","Dụng cụ học tập"]
                },

                {
                    name:"⚽ Thể thao",
                    percent:15,
                    items:["Đá bóng","Cầu lông","Gym"]
                },

                {
                    name:"🎮 Giải trí",
                    percent:10,
                    items:["Game","Cafe","Xem phim"]
                },

                {
                    name:"🎁 Quan hệ",
                    percent:5,
                    items:["Quà sinh nhật","Liên hoan"]
                },

                {
                    name:"💰 Tiết kiệm",
                    percent:15,
                    items:["Quỹ dự phòng"]
                }

            ]

        },

        female:{

            title:"Học sinh Nữ (11-17 tuổi)",

            note:"Đây là độ tuổi chủ yếu sử dụng tiền tiêu vặt, gia đình đã hỗ trợ các chi phí thiết yếu.",

            fixed:[],

            categories:[

                {
                    name:"🍱 Ăn uống",
                    percent:28,
                    items:["Ăn sáng","Ăn vặt","Trà sữa"]
                },

                {
                    name:"📚 Học tập",
                    percent:25,
                    items:["Sách","Photo","Đồ dùng học tập"]
                },

                {
                    name:"💄 Chăm sóc cá nhân",
                    percent:12,
                    items:["Mỹ phẩm cơ bản","Phụ kiện"]
                },

                {
                    name:"🧘 Thể thao",
                    percent:10,
                    items:["Yoga","Dance","Cầu lông"]
                },

                {
                    name:"🎁 Quan hệ",
                    percent:10,
                    items:["Sinh nhật","Liên hoan"]
                },

                {
                    name:"💰 Tiết kiệm",
                    percent:15,
                    items:["Quỹ dự phòng"]
                }

            ]

        }

    },

    // =============================
    // SINH VIÊN
    // =============================

    university:{

        // Ở cùng gia đình

        home:{

            male:{

                title:"Sinh viên Nam (Ở cùng gia đình)",

                fixed:[],

                categories:[

                    {
                        name:"🍔 Ăn uống",
                        percent:35,
                        items:["Ăn sáng","Ăn trưa","Ăn tối"]
                    },

                    {
                        name:"📚 Học tập",
                        percent:20,
                        items:["Giáo trình","Photo","Laptop"]
                    },

                    {
                        name:"🚌 Đi lại",
                        percent:15,
                        items:["Xăng","Gửi xe"]
                    },

                    {
                        name:"⚽ Thể thao",
                        percent:10,
                        items:["Gym","Đá bóng"]
                    },

                    {
                        name:"🎮 Giải trí",
                        percent:10,
                        items:["Cafe","Xem phim"]
                    },

                    {
                        name:"💰 Tiết kiệm",
                        percent:10,
                        items:["Quỹ dự phòng"]
                    }

                ]

            },

            female:{

                title:"Sinh viên Nữ (Ở cùng gia đình)",

                fixed:[],

                categories:[

                    {
                        name:"🍔 Ăn uống",
                        percent:35,
                        items:["Ăn sáng","Ăn trưa","Ăn tối"]
                    },

                    {
                        name:"📚 Học tập",
                        percent:20,
                        items:["Giáo trình","Photo"]
                    },

                    {
                        name:"🚌 Đi lại",
                        percent:15,
                        items:["Xăng","Xe bus"]
                    },

                    {
                        name:"💄 Chăm sóc cá nhân",
                        percent:10,
                        items:["Mỹ phẩm","Phụ kiện"]
                    },

                    {
                        name:"🧘 Thể thao",
                        percent:10,
                        items:["Yoga","Cầu lông"]
                    },

                    {
                        name:"💰 Tiết kiệm",
                        percent:10,
                        items:["Quỹ dự phòng"]
                    }

                ]

            }

        },

        // Thuê trọ

        rent:{

            male:{

                title:"Sinh viên Nam (Thuê trọ)",

                fixed:[
                    {
                        name:"🏠 Tiền trọ (Đã bao gồm điện, nước và Internet)",
                        amount:2500000
                    }
                ],

                categories:[

                    {
                        name:"🍔 Ăn uống",
                        percent:40
                    },

                    {
                        name:"📚 Học tập",
                        percent:15
                    },

                    {
                        name:"🚌 Đi lại",
                        percent:10
                    },

                    {
                        name:"⚽ Thể thao",
                        percent:10
                    },

                    {
                        name:"🎮 Giải trí",
                        percent:10
                    },

                    {
                        name:"💰 Tiết kiệm",
                        percent:15
                    }

                ]

            },

            female:{

                title:"Sinh viên Nữ (Thuê trọ)",

                fixed:[

                    {
                        name:"🏠 Tiền trọ (Đã bao gồm điện, nước và Internet)",
                        amount:2500000
                    }

                ],

                categories:[

                    {
                        name:"🍔 Ăn uống",
                        percent:35
                    },

                    {
                        name:"📚 Học tập",
                        percent:15
                    },

                    {
                        name:"🚌 Đi lại",
                        percent:10
                    },

                    {
                        name:"💄 Chăm sóc cá nhân",
                        percent:15
                    },

                    {
                        name:"🧘 Thể thao",
                        percent:10
                    },

                    {
                        name:"💰 Tiết kiệm",
                        percent:15
                    }

                ]

            }

        },

        // Ký túc xá

        dorm:{}

    },

    worker:{},

    retired:{},

    chartColors:[
        "#2563eb",
        "#22c55e",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6",
        "#06b6d4",
        "#14b8a6",
        "#f97316"
    ]

};
