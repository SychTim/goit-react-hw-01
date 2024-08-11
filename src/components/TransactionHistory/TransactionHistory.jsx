import PropTypes from 'prop-types';
import css from  "./TransactionHistory.module.css";

export default function TransactionHistory({transactions}) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                <th className={css.tHead}>Type</th>
                <th className={css.tHead}>Amount</th>
                <th className={css.tHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id} className={css.row}>
                            <td className={css.tData}>{type}</td>
                            <td className={css.tData}>{amount}</td>
                            <td className={css.tData}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}