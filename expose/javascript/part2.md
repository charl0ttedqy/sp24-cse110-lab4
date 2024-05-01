1. 3\
line 12 logs 'i' which was declared using the keyword var, which allows it to be accessed after the for loop ends, and by that time, the value of i should be 3

2. 150\
line 12 logs 'discountedPrice' which was declared using the keyword var, which allows it to be accessed after the for loop ends, and by that time, the value of 'discountedPrice' should be the discounted price of the last item, 150

3. 150\
line 14 logs 'finalPrice' which was declared using the keyword var, which allows it to be accessed after the for loop ends, and by that time, the value of 'finalPrice' should be the final price of the last item, 150

4. [50, 100, 150]\
function returns the discounted array since it is correctly updated in each loop iteration

5. Error\
line 12 tries to log 'i' which was declared using the keyword let, which means that it cannot be accessed outside the for loop block

6. Error\
line 13 tries to log 'discountedPrice' which was declared using the keyword let, which means that it cannot be accessed outside the for loop block

7. 150\
line 14 logs 'finalPrice' which was declared in the scope of the entire function using the keyword let, this makes it accessible at line 14, so the output should be 150

8. [50, 100, 150]\
function returns the discounted array which was declared in the scope of the entire function using the keyword let, this makes it accessible at the return statement, so the output should be [50, 100, 150]

9. Error\
line 11 tries to log 'i' which was declared using the keyword let, which means that it cannot be accessed outside the for loop block

10. 3\
line 12 logs 'length' which was declared using the keyword const to record the length of input array prices, so the output should be 3

11. [50, 100, 150]\
function returns the discounted array which was declared using the keyword const, but since we are simply pushing values into the array instead of reassigning the variable to a new value, it does not raise any error and would correctly output the discounted array

12. A. student.name\
B. student['Grad Year']\
C. student.greeting()\
D. student['Favorite Teacher'].name\
E. student.courseLoad[0];\

13. 
