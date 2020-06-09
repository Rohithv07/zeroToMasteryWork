def sum_of_digit(number):
	sums=0
	while(number > 0):
		rem = number % 10
		sums = sums + rem;
		number = number / 10
	return sums

list = [12, 10, 102, 31, 15]
result = []

# Store as a pair
for i in range(len(list)):
	result.append([int(sum_of_digit(list[i])), list[i]])

result.sort()
for i in range(len(result)):
	print(result[i][1], end=",")





