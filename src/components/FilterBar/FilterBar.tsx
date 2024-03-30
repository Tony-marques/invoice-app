import {styled} from "styled-components";
import {
    useModalContext
} from "../../contexts/ModalContext.tsx";
import {
    ChangeEvent,
    FormEvent,
    useEffect,
    useState
} from "react";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";

const FilterBar = () => {
    const {showModal} = useModalContext();
    const [showFilterList, setShowFilterList] = useState(false);
    const {
        selectedFilter,
        choiceInvoice,
        invoices
    } = useInvoiceContext();

    useEffect(() => {
        document.body.addEventListener("click", () => {
            setShowFilterList(false);
        });
    }, []);

    const handleAddInvoice = () => {
        showModal();
    };

    const handleClickFilter = (e: FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowFilterList((prev) => !prev);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();

        if(selectedFilter !== "") {
            choiceInvoice("");
        }
        if(e.target.checked) {
            choiceInvoice(e.target.value);
        } else {
            choiceInvoice("");
        }
    };

    console.log(selectedFilter);

    return (
        <FilterBarStyled>
            <div className="filterBar-left">
                <div className="title">Invoices</div>
                <div className="total-invoices">There
                    are {invoices.length} total invoices
                </div>
            </div>
            <div
                className="filterBar-right"
            >
                <button
                    className="filter"
                    onClick={handleClickFilter}
                >
                    <span>Filter by status</span>
                    <img
                        src="/assets/icon-arrow-down.svg"
                        alt=""
                    />
                </button>
                <button
                    className="add-invoice"
                    onClick={handleAddInvoice}
                >
                    <span className="icon">
                        <img
                            src="/assets/icon-plus.svg"
                            alt=""
                        />
                    </span>
                    <span className="new-invoice">New Invoice</span>
                </button>

                {showFilterList &&
                    <div
                        className="filter-list"
                        onClick={(e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation()}
                    >
                        <div className="input-group">
                            <input
                                type="checkbox"
                                id="draft"
                                name="filter-group"
                                value="draft"
                                onChange={handleOnChange}
                                checked={"draft" === selectedFilter}
                            />
                            <label htmlFor="draft">Draft</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="checkbox"
                                id="pending"
                                name="filter-group"
                                value="pending"
                                onChange={handleOnChange}
                                checked={"pending" === selectedFilter}
                            />
                            <label htmlFor="pending">Pending</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="checkbox"
                                id="paid"
                                name="filter-group"
                                value="paid"
                                onChange={handleOnChange}
                                checked={"paid" === selectedFilter}

                            />
                            <label htmlFor="paid">Paid</label>
                        </div>
                    </div>}
            </div>
        </FilterBarStyled>
    );
};

export default FilterBar;

const FilterBarStyled = styled.div`
    display: flex;
    width: 730px;
    justify-content: space-between;
    margin-top: 77px;

    .filterBar-left {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .title {
            font-size: 36px;
            font-weight: 700;
        }

        .total-invoices {
            font-size: 13px;
            color: #888EB0;
        }

    }

    .filterBar-right {
        display: flex;
        align-items: center;
        gap: 40px;
        //border: 1px solid red;
        position: relative;

        .filter-list {
            position: absolute;
            top: 100%;
        }

        button.filter {
            display: flex;
            align-items: center;
            gap: 14px;
            background-color: inherit;
            border: none;
            outline: none;
            cursor: pointer;

            span {
                font-weight: 700;
                font-size: 15px;
            }
        }

        button.add-invoice {
            background-color: #7C5DFA;
            padding: 0.5rem;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            gap: 16px;
            border-radius: 50px;
            cursor: pointer;

            span.icon {
                width: 32px;
                height: 32px;
                background-color: #FFFFFF;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                }
            }

            span.new-invoice {
                font-weight: 700;
                color: #FFFFFF;
            }
        }
    }

    .filter-list {
        background-color: white;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-shadow: 1px 1px 5px rgba(72, 84, 159, 0.1);

        .input-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;

            label {
                font-weight: 700;
                cursor: pointer;
            }

            input {
                cursor: pointer;
                appearance: none;
                width: 15px;
                height: 15px;
                background-color: #CDD0E5;
                transition: background-color 0.5s;

            }

            input::after {
                transition: background-color 0.5s;
            }

            input:checked::after {
                display: flex;
                justify-content: center;
                align-items: center;
                content: "v";
                background-color: #9277FF;
            }
        }
    }
`;