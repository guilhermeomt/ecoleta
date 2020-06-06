import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { StyleSheet, Text, View, ImageBackground, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-community/picker'
import axios from 'axios';

interface IBGEUFResponse {
    sigla: string,
}

interface IBGECityResponse {
    nome: string,
}

const Home = () => {
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            selectedUf,
            selectedCity,
        });
    }

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
            const ufInitials = res.data.map(uf => uf.sigla).sort();
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        setCities([]); // Reseta a lista de cidades - Resets cities list;
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(res => {
            const cityNames = res.data.map(uf => uf.nome).sort();
            setCities(cityNames);
        });
    }, [selectedUf]);

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? "padding" : undefined}>
            <ImageBackground
                source={require('../../assets/home-background.png')}
                style={styles.container}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                    <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de
                  coleta de forma eficienta</Text>
                </View>

                <View style={styles.footer}></View>
                <Picker
                    style={styles.input}
                    selectedValue={selectedUf}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedUf(itemValue.toString());
                    }}
                >
                    <Picker.Item key={0} color="rgba(0,0,0,0.25)" label={"Escolha a UF"} value={0}></Picker.Item>
                    {ufs.map(uf => (
                        <Picker.Item key={String(uf)} label={uf} value={uf}></Picker.Item>
                    ))}
                </Picker>
                
                <Picker
                    style={styles.input}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue.toString())}
                >
                    <Picker.Item key={0} color="rgba(0,0,0,0.25)" label={"Escolha a cidade"} value={0}></Picker.Item>
                    {cities.map(city => (
                        <Picker.Item key={String(city)} label={city} value={city}></Picker.Item>
                    ))}
                </Picker>

                {/*
                <TextInput
                    style={styles.input}
                    placeholder="Digite a UF"
                    value={uf}
                    maxLength={2}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    onChangeText={setUf}
                >
                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="Digite a cidade"
                    value={city}
                    autoCorrect={false}
                    onChangeText={setCity}
                >
                </TextInput>
                            */}

                <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" color="#FFF" size={24}></Icon>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>
                            Entrar
                    </Text>
                    </View>
                </RectButton>
            </ImageBackground>
        </KeyboardAvoidingView>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF',
        marginTop: 0,
        width: 250,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

export default Home;