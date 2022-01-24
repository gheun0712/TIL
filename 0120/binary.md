``` python
# 10진법 > 2진법
def binary(num):
    if num == 0:
        return '0'
    s = ''
    while num > 0:
        s = str(num % 2) + s
        num //= 2
    return s

print(binary(10))

# 2진법 > 10진법
def decimal(s):
    result = 0
    for i in range(0, len(s)):
        result += int(s[-i - 1]) * 2 ** i
    return result

print(decimal('11010'))

################################################

a = [[0,1,2],[3,4,5],[6,7,8]]

def draw(lst):
    result = ''
    for i in a :
        result += f"{i}\n"
    return result

print(draw(a))
```

