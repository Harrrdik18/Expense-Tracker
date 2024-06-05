import React from 'react';
import styles from './Transaction.module.css';

function Transactions({ transactions = [] }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles.details}>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <div className={styles.transaction}>
              <img
                className={styles.categoryimg}
                src={`src/assets/${transaction.category}.jpg`}
                alt={`${transaction.category}`}
              />
              <div className={styles.leftpart}>
                <p>{transaction.title}</p>
                <p className={styles.date}>{formatDate(transaction.date)}</p>
              </div>
              <div className={styles.price}>
                <span>{`₹ ${transaction.price}`}</span>
                <a href="#">
                  <img className={styles.cutedit} src="src/assets/Cut.png" alt="Cut" />
                </a>
                <a href="#">
                  <img className={styles.cutedit} src="src/assets/Edit.png" alt="Edit" />
                </a>
              </div>
            </div>
            <hr className={styles.separator} />
          </React.Fragment>
        ))
      ) : (
        <p>No transactions yet</p>
      )}
    </div>
  );
}

export default Transactions;
