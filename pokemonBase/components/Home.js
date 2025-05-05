import React, { useEffect } from "react"
import { Text,Image, View, Button, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "../assets/styles"
import { fetchPokemons } from "../store/action"
import PokemonCard from "./reusable/card"

// Componente principal Home
export default function Home({ navigation }) {
    // useDispatch é usado para despachar ações para o store do Redux
    const dispatch = useDispatch()
    // useSelector é usado para acessar o estado do Redux
    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    const next = useSelector(state => state.next)

    // useEffect é usado para executar efeitos colaterais, como buscar dados
    useEffect(() => {
        const fetchData = async () => {
          // Despacha a ação fetchPokemons com o próximo conjunto de dados
          await dispatch(fetchPokemons(next));
        };
      
        // Chama a função fetchData quando o componente é montado
        fetchData();
      }, []);

    return (
        // View principal do componente
        <View style={styles.container}>
            <Image source={require('./../assets/logo.webp')} style={styles.logo}></Image>
           
            <FlatList
                data={pokemons} // Dados da lista
                numColumns={2} // Número de colunas
                showsVerticalScrollIndicator={false} // Esconde a barra de rolagem vertical
                keyExtractor={(pokemon) => String(pokemon.id)} // Chave única para cada item
                renderItem={({ item }) => <PokemonCard pokemon={item} />} // Renderiza cada item usando o componente PokemonCard
                contentContainerStyle={styles.flatListContentContainer} // Estilo do container da lista
            />

            {/* Botão para carregar mais Pokémons */}
            <View style={{ padding: 5, marginTop: 10 }}>
                <Button title="Show More" color={"gray"} onPress={() => dispatch(fetchPokemons(next))} />
            </View>
        </View>
    )
}
/*
Explicação das Funcionalidades:
Importações:
React e Hooks: Importa useEffect do React para gerenciar efeitos colaterais.
Componentes do React Native: Importa componentes como Text, View, Button e FlatList para construir a interface.
Redux: Importa useDispatch e useSelector do Redux para gerenciar o estado global.
Estilos e Ações: Importa estilos personalizados de ../assets/styles e a ação fetchPokemons de ../store/action.
Componente Reutilizável: Importa o componente PokemonCard para exibir cada Pokémon.
Componente Principal:
Home: Define o componente Home que recebe navigation como prop.
Estado do Redux:
dispatch: Usa useDispatch para despachar ações.
pokemons, loading, next: Usa useSelector para acessar o estado do Redux.
Efeito Colateral:
useEffect: Executa a função fetchData quando o componente é montado, que despacha a ação fetchPokemons para buscar dados.
Renderização:
View Principal: Contém o título e a lista de Pokémons.
FlatList: Exibe a lista de Pokémons em duas colunas, sem barra de rolagem vertical, e usa PokemonCard para renderizar cada item.
Botão “Show More”: Despacha a ação fetchPokemons para carregar mais Pokémons quando clicado.
*/