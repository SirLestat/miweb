
num1 = int(input("Digita numero 1: "))
num2 = int(input("Digita numero 2: "))
num3 = int(input("Digita numero 3: "))



if num1 > num2 and num1 > num3:
    print(f"El numero 1 ({num1}) es mas grande")
    # if num2 > num3:
    #     print (f"Y el numero 3 ({num3}) el mas pequeño")
    # else:
    #     print (f"Y el numero 2 ({num2}) el mas pequeño")

elif num2 > num1 and num2 > num3:
    print(f"El numero 2 ({num2}) es mas grande")
    # if num3 > num1:
    #     print (f"Y el numero 1 ({num1}) el mas pequeño")
    # else:
    #     print (f"Y el numero 3 ({num2}) el mas pequeño")

elif num3 > num1 and num3 > num2:
    print(f"El numero 3 ({num3}) es mas grande")
    # if num2 > num1:
    #     print (f"Y el numero 1 ({num1}) el mas pequeño")
    # else:
    #     print (f"Y el numero 2 ({num2}) el mas pequeño")

