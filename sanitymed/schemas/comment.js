export default {
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'Approved',
			title: 'Description',
			name: 'approved',
			type: 'boolean',
			description: 'Comment wont show on the site without approval',
		},
		{
			name: 'email',
			type: 'string',
		},
		{
			name: 'name',
			type: 'string',
		},
		{
			name: 'comment',
			type: 'string',
		},
		{
			name: 'post',
			type: 'reference',
			to: [{type: 'post'}],
		},
	],
};
