def firstRecurringCharacter(list):
    dict = {}
    for elements in list:
        if (not elements in dict.keys()):
            dict[elements] = True
        elif (elements in dict.keys()):
            return elements
    return "undefined"


li1 = [2, 5, 2]
li2 = [1, 2, 3, 4]
li3 = [2, 5, 5, 2]

print(firstRecurringCharacter(li1))
print(firstRecurringCharacter(li2))
print(firstRecurringCharacter(li3))
