# ESCREVA UM PROGRA,A QIE LEIA UM VALOR EM METROS E O EXIBA EM CENTÍMETROS E MILIMETROS

n1 = float(input('Digite um numero em metros: '))
c = n1 * 100
m = n1 * 1000
print('O número digitado em centímetros é {}, e em milímetros {}'.format(c, m))