export type Piersol = {
    "version": "0.1.0",
    "name": "piersol",
    "instructions": [
        {
            "name": "initializeConfig",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFee",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "feeWallet",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "updateFee",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "feeWallet",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "initializeBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeEscrow",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFriend",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "friendMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "friend",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "decreaseFeeRate",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateFriend",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "friendMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "friend",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "decreaseFeeRate",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "offeredAmount",
                    "type": "u64"
                },
                {
                    "name": "desiredAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "closeBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "taker",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "offeredFriend",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredFriend",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaDesired",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "takerAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "takerAtaDesired",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "percent",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "cancelBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "collectFee",
            "accounts": [
                {
                    "name": "collector",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "feeAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "book",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "creator",
                        "type": "publicKey"
                    },
                    {
                        "name": "offeredMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "desiredMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "escrow",
                        "type": "publicKey"
                    },
                    {
                        "name": "offeredAmount",
                        "type": "u64"
                    },
                    {
                        "name": "desiredAmount",
                        "type": "u64"
                    },
                    {
                        "name": "state",
                        "type": "u8"
                    },
                    {
                        "name": "bookBump",
                        "type": "u8"
                    },
                    {
                        "name": "escrowBump",
                        "type": "u8"
                    },
                    {
                        "name": "id",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "fee",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "wallet",
                        "type": "publicKey"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "config",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "creator",
                        "type": "publicKey"
                    },
                    {
                        "name": "lastOfferedId",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "friend",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "decreaseFeeRate",
                        "type": "u8"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "BookState",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Created"
                    },
                    {
                        "name": "Closed"
                    },
                    {
                        "name": "Cancelled"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidBookState",
            "msg": "Book is in invalid state"
        },
        {
            "code": 6001,
            "name": "FeeRateOutOfRange",
            "msg": "The fee rate must be between 0 and 100."
        },
        {
            "code": 6002,
            "name": "PercentOutOfRange",
            "msg": "The percent must be between 0 and 100."
        }
    ]
};

export const IDL: Piersol = {
    "version": "0.1.0",
    "name": "piersol",
    "instructions": [
        {
            "name": "initializeConfig",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFee",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "feeWallet",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "updateFee",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "feeWallet",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "initializeBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "config",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeEscrow",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "initializeFriend",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "friendMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "friend",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "decreaseFeeRate",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateFriend",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "friendMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "friend",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "decreaseFeeRate",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "offeredAmount",
                    "type": "u64"
                },
                {
                    "name": "desiredAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "closeBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "taker",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "offeredFriend",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "desiredFriend",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaDesired",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "takerAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "takerAtaDesired",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "percent",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "cancelBook",
            "accounts": [
                {
                    "name": "creator",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "creatorAtaOffered",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "collectFee",
            "accounts": [
                {
                    "name": "collector",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "offeredMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "config",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "fee",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "feeAta",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "book",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "escrow",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "book",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "creator",
                        "type": "publicKey"
                    },
                    {
                        "name": "offeredMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "desiredMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "escrow",
                        "type": "publicKey"
                    },
                    {
                        "name": "offeredAmount",
                        "type": "u64"
                    },
                    {
                        "name": "desiredAmount",
                        "type": "u64"
                    },
                    {
                        "name": "state",
                        "type": "u8"
                    },
                    {
                        "name": "bookBump",
                        "type": "u8"
                    },
                    {
                        "name": "escrowBump",
                        "type": "u8"
                    },
                    {
                        "name": "id",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "fee",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "wallet",
                        "type": "publicKey"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "config",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "creator",
                        "type": "publicKey"
                    },
                    {
                        "name": "lastOfferedId",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "friend",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "decreaseFeeRate",
                        "type": "u8"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "BookState",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Created"
                    },
                    {
                        "name": "Closed"
                    },
                    {
                        "name": "Cancelled"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidBookState",
            "msg": "Book is in invalid state"
        },
        {
            "code": 6001,
            "name": "FeeRateOutOfRange",
            "msg": "The fee rate must be between 0 and 100."
        },
        {
            "code": 6002,
            "name": "PercentOutOfRange",
            "msg": "The percent must be between 0 and 100."
        }
    ]
};
