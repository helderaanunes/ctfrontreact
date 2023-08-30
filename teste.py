def calcularTempo(tamanhoVetor, tempo):

    esquerda = 5 * tempo
    direita =  ((esquerda * tamanhoVetor) + (3 * tempo) )
    
    return direita

tamanho = int(input("Digite um tamanho para o vetor: "))
tempo = int(input("Digite um tempo para a operação: "))

calculo = calcularTempo(tamanho, tempo)

print(calculo)
    