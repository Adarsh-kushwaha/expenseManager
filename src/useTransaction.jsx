import {useContext} from "react";
import { ExpenseTrackerContext } from "./Context/Context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/Categories";

const useTransaction = (title) => {
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const typeOfTransaction = transactions.filter((t)=>t.type===title);
    const total = typeOfTransaction.reduce((acc, currVal)=>acc=acc+currVal.amount,0);
    const Categories = title==="Income" ? incomeCategories : expenseCategories;

    typeOfTransaction.forEach((t) => {
        const category = Categories.find((c)=> c.type === t.category)

        if(category)
            category.amount = category.amount + t.amount;
        });

        const filteredCategories = Categories.filter((c)=>c.amount>0);

        const chartData ={
            datasets:[{
                data:filteredCategories.map((c)=>c.amount),
                backgroundColor:filteredCategories.map((c)=>c.color)
            }],

            labels:filteredCategories.map((c)=>c.type)
        }
        return {chartData, total}
    

   


}

export default useTransaction;
