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
E. student.courseLoad[0]

13. A. 32 (string concatenation)\
    B. 1 (converts string to int because typecasting with subtraction performs subtraction)\
    C. 3 (converts null to 0 and perform addition, so 3+0=3)\
    D. 3null (string concatenation)\
    E. 4 (converts true to 1 and perform addition, so 1+3=4)\
    F. 0 (converts null to 0 and perform addition, so 0+0=0)\
    G. 3undefined (string concatenation)\
    H. NaN (converts undefined to NaN, so 3-NaN=NaN)

14. A. true (converts '2' to 2 and compare, so true)\
    B. false (string comparison, '12' comes before '2' alphabetically)\
    C. true (converts '2' to 2 and compare, so true)\
    D. false ('===' compares without any type conversion, so false)\
    E. false (converts true to 1 and compare, so false)\
    F. true (boolean(2) is non-zero, so it evaluates to true, comparing true to true without type conversion is true)

15. '==' automatically performs type conversion and then compare the two variables, while '===' strictly performs comparison without any type conversion

16. see part2-question16.js

17. [2,4,6]\
function modifyArray passes in initial array [1,2,3] and function doSomething, which multiplies each term in initial array by 2 and stores the multiplied terms into newArray, function then returns newArray, which should be [2,4,6]

18. see part2-question18.js
    
19. 1\
    4\
    3\
    2\
1 is logged first immediately, then we log 2 with 1000 millisecond delay, after that we log 3 with 0 millisecond delay which means that it will be executed right after all other lines, finally we log 4 immediately. This means that 1 is printed first, 4 is printed second, 3 is printed third after all lines run, then 2 is printed at last due to the extra delay.

