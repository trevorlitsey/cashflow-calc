import React from 'react';
import { object, func } from 'prop-types'
import { format } from 'date-fns';
import { List, Avatar, Popconfirm, message } from 'antd';
import currencyFormatter from 'currency-formatter';

import { convertObjToArr } from '../../helpers';

class RecurringExpenseTable extends React.Component {

	static propTypes = {
		recurringExpenses: object.isRequired,
		deleteRecurringExpense: func.isRequired,
	}

	handleRecurringExpenseDelete = (id) => {
		this.props.deleteRecurringExpense(id)
		message.success('recurring income/expense deleted');
	}

	render() {

		const { recurringExpenses, deleteRecurringExpense } = this.props

		return (
			<List
				itemLayout="horizontal"
				dataSource={convertObjToArr(recurringExpenses) || []}
				renderItem={item => (
					<List.Item
						data-test="list-item"
						actions={[
							<a>edit</a>,
							<Popconfirm title="Are you sure delete this expense?" onConfirm={() => this.handleRecurringExpenseDelete(item.id)} okText="Yes" cancelText="No">
								<a>delete</a>
							</Popconfirm>
						]}>
						<List.Item.Meta
							avatar={<Avatar icon="calendar" />}
							title={`${item.name} (${currencyFormatter.format(item.amount, { code: 'USD', precision: 0 })})`}
							description={`every ${item.frequency} ${item.interval} starting on ${format(item.startDate, 'MMMM D, YYYY')}`}
						/>
					</List.Item>
				)}
			/>
		)
	}
}



export default RecurringExpenseTable;