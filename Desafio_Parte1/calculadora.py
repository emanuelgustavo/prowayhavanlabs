moedas = {'Real': 1, 'Dólar': 5.25, 'Euro': 6.46}

def main():

    menu = True
    
    while menu != 3:

        menu = menu_principal()

        if menu == 1:
            receber_parametros()
        if menu == 2:
            cadastrar_nova_moeda()

def menu_principal():
    opcao = int(input(
        f'\n-----Casa de Câmbio Muito Dinheiro----'
        f'\n------Calculadora de Câmbio-----------'
        f'\nSelecione a opção desejada:'
        f'\n1 - Calculadora de Câmbio'
        f'\n2 - Cadastrar Moeda'
        f'\n3 - Sair'
        f'\nOpção: '
        ))

    return opcao

def receber_parametros():

    print(
        f'\n\n----Calculadora de Câmbio----'
        f'\nInsira abaixo a moeda de origem, destino e valor:\n'
        f'----Opções de moeda----'
        f'\nMoeda\t\tValor'
    )
    for moeda in moedas:
        print(f'{moeda}\t\t{moedas[moeda]:.2f}')

    moeda_origem = input('Moeda de origem >>> ')
    print(f'Moeda de Origem selecionada: {moeda_origem}\n')
    moeda_destino = input('Moeda de destino >>> ')
    print(f'Moeda de Destino selecionada: {moeda_origem}\n')
    
    taxa_conversao = calcula_taxa_conversao(moeda_origem, moeda_destino)
    
    valor_conversao = float(input(
        f'Insira o valor a ser convertido de {moeda_origem} para {moeda_destino}:'
        f'\nValor >>> '
        ))
    
    print(f'O valor de {moeda_origem} em {moeda_destino} é {calcular_moeda(valor_conversao, taxa_conversao):.2f}')

def calcula_taxa_conversao(moeda_origem, moeda_destino):
    return moedas[moeda_origem] / moedas[moeda_destino]

def calcular_moeda(valor_conversao, taxa_conversao):
    return valor_conversao * taxa_conversao

def cadastrar_nova_moeda():

    cadastrar_moeda = True

    print(
        f'-------Cadastro moeda para conversão de valores-------'
        )

    while cadastrar_moeda:

        nome_moeda = input('Insira o nome da moeda: ')

        if nome_moeda in moedas:
            print('Nome de moeda já cadastrada. Insira novamente...\n')
        else:
            valor_moeda = float((input('Insira o valor atual da moeda: ').replace(',', '.')))
            moedas[nome_moeda] = valor_moeda
            cadastrar_moeda = False
            print(f'Moeda {nome_moeda} cadastrada com sucesso!')    

main()
