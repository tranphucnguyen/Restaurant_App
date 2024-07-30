import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E6E6E6', '#FEFFBF']} // Các màu gradient cho header
                style={styles.header}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#202244" style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={{ width: 24 }} /> {/* Để tạo khoảng trống đối xứng với icon back */}
            </LinearGradient>
            <View style={styles.profileImageContainer}>
                <Image
                    source={require('../assets/Pro.png')} // Đường dẫn tới ảnh profile của bạn
                    style={styles.profileImage}
                />
                <Image
                    source={require('../assets/edit.png')} // Đường dẫn tới ảnh profile của bạn
                    style={styles.tablerImage}
                />
            </View>
            <LinearGradient
                colors={['#FEFFBF', '#E6E6E6']} // Các màu gradient cho footer, đảo ngược
                style={styles.footer}
            >
                <Text style={styles.footerName}>Rakibul Hasan</Text>
                <Text style={styles.footerEmail}>rakibhbrand@gmail.com</Text>
                <View style={styles.optionsContainer}>
                    <View style={styles.column}>
                        <Ionicons style={styles.optionleft} name="home" size={24} color="#242424" />
                        <Ionicons name="card" style={styles.optionleft} size={24} color="#242424" />
                        <Ionicons name="moon" style={styles.optionleft} size={24} color="#242424" />
                        <Ionicons name="location" style={styles.optionleft} size={24} color="#242424" />
                        <Ionicons name="settings" style={styles.optionleft} size={24} color="#242424" />
                        <Ionicons name="help-circle" style={styles.optionleft} size={24} color="#242424" />
                    </View>
                    <View style={styles.columnText}>
                        <Text style={styles.optionText}>Home</Text>
                        <Text style={styles.optionText}>My Card</Text>
                        <Text style={styles.optionText}>Dark Mode</Text>
                        <Text style={styles.optionText}>Track Your Order</Text>
                        <Text style={styles.optionText}>Settings</Text>
                        <Text style={styles.optionText}>Help Center</Text>
                    </View>
                    <View style={styles.columnIcon}>
                        <Ionicons name="chevron-forward" style={styles.chevron} size={24} color="#242424" />
                        <Ionicons name="chevron-forward" style={styles.chevron} size={24} color="#242424" />
                        <Image source={require('../assets/Toggle.png')} style={styles.darkModeImage} /> {/* Đường dẫn tới ảnh dark mode của bạn */}
                        <Ionicons name="chevron-forward" style={styles.chevron} size={24} color="#242424" />
                        <Ionicons name="chevron-forward" style={styles.chevron} size={24} color="#242424" />
                        <Ionicons name="chevron-forward" style={styles.chevron} size={24} color="#242424" />
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../assets/Button.png')} // Đường dẫn tới ảnh profile của bạn
                        style={styles.buttonImage}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 179,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTitle: {
        fontSize: 15,
        color: '#000000',
        lineHeight: 20,
        fontStyle: 'Poppins',
        fontWeight: 'bold',
        marginBottom: 60,
    },
    arrowIcon: {
        marginBottom: 60,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginTop: 20, // Điều chỉnh khoảng cách từ header tới ảnh profile
    },
    profileImage: {
        bottom: 80,

    },
    tablerImage: {
        bottom: 140,
        left: 35,
    },
    footer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: -1,
    },
    footerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242424',
        bottom: 230,
    },
    footerEmail: {
        fontSize: 14,
        color: '#686868',
        bottom: 230,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 130,
        width: '100%',
    },
    column: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200,
    },
    columnText: {
        justifyContent: 'space-around',
        alignItems: 'left',
        height: 200,
    },
    columnIcon: {
        justifyContent: 'space-around',
        alignItems: 'right',
        height: 200,
        marginLeft: 100,
    },
    chevron: {
        marginLeft: 28,
        marginTop: 38,
    },
    darkModeImage: {
        marginTop: 55,
    },
    optionText: {
        fontSize: 16,
        color: '#242424',
        alignContent: 'flex-start',
        marginTop: 44,
    },
    optionleft: {
        marginTop: 40,
    },
    buttonImage: {
        top: 50,
    }
});

export default ProfileScreen;
