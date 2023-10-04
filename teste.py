def ordenarVetor(vetor):
    for i in range(1, len(vetor)):
        menor = vetor[i]
        j = i - 1

        while j >= 0 and menor < vetor[j]:
            vetor[j+1] = vetor[j]
            j -= 1
        vetor[j+1] = menor

numeros = [64, 25, 12, 22, 11]

var = ordenarVetor(numeros)
print(var)