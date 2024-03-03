CustomerArray = [
    {CustomerID : 'C00-001',Name : 'Vishal',Address : 'Galle',Salary : '100 000 000 000'},
    {CustomerID : 'C00-002',Name : 'Kasun',Address : 'Galle',Salary : '100 000 000'}
];

ItemsArray = [
    {ItemCode : 'I00-001',ItemName : 'Samba',ItemQTY : '100',ItemPrice : '150'},
    {ItemCode : 'I00-002',ItemName : 'Signal',ItemQTY : '120',ItemPrice : '120'}
];

OrdersArray = [
    {OrderID : 'OR00-001',CustmoerID : 'C00-001', Name : 'Vishal',Address : 'Galle',Salary : '100 000 000 000', OrderDetails : [
        {ItemCode : 'I00-001',ItemName : 'Samba',ItemQTY : '100',ItemPrice : '150', QTY : '10'},
        {ItemCode : 'I00-002',ItemName : 'Signal',ItemQTY : '120',ItemPrice : '120', QTY : '10'}
    ]}
];