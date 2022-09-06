import PropTypes from "prop-types";

const TransactionHistory = ({ items }) =>
(
    <table class="transaction-history">
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>

    <tbody> 
    {items.map(({ type, amount, currency, id }) =>
    (
    <tr key={ id }>
        <td>{ type }</td>
        <td>{ amount }</td>
        <td>{ currency }</td>
    </tr>
    ))}
    </tbody>
</table>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
    
export default TransactionHistory;