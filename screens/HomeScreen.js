import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

// Kích thước của màn hình
const { width } = Dimensions.get('window');

// Dữ liệu cho các layout slide
const slides = [
    { id: '1', image: require('../assets/sample1.png') },
    { id: '2', image: require('../assets/sample2.png') },
    { id: '3', image: require('../assets/sample3.png') },
    { id: '4', image: require('../assets/sample4.png') },
];

// Dữ liệu cho banner
const bannerSlides = [
    { id: '1', image: require('../assets/banner1.png') },
    { id: '2', image: require('../assets/banner1.png') },
    { id: '3', image: require('../assets/banner1.png') },
];

const HomeScreen = () => {
    // Component để render từng item trong FlatList
    const renderSlideItem = ({ item }) => (
        <View style={[styles.slide, item.id === '1' && styles.slide1]}>
            <Image source={item.image} style={styles.slideImage} />
        </View>
    );

    // Component để render từng item trong AppIntroSlider cho banner
    const renderBannerItem = ({ item }) => (
        <View style={styles.bannerSlide}>
            <Image source={item.image} style={styles.bannerImage} />
        </View>
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['transparent', '#FEFFBF']}
                style={styles.header}
            >
                <Image source={require('../assets/profile.png')} style={styles.profileImage} />

                <View style={styles.locationContainer}>
                    <Text style={styles.locationLabel}>Your location</Text>
                    <View style={styles.locationInnerContainer}>
                        <Ionicons name="location-outline" size={20} color="black" />
                        <Text style={styles.locationText}>Savar, Dhaka</Text>
                    </View>
                </View>

                <Image source={require('../assets/sample.png')} style={styles.sampleImage} />
            </LinearGradient>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="white" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search your food"
                    placeholderTextColor="#FFF"
                    style={styles.searchInput}
                />
                <Image source={require('../assets/Frame.png')} style={styles.searchImage} />
            </View>

            {/* 4 Layouts dạng slide */}
            <FlatList
                data={slides}
                renderItem={renderSlideItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={styles.slidesContainer}
            />

            {/* Banner slide */}
            <View style={styles.bannerWrapper}>
                <AppIntroSlider
                    renderItem={renderBannerItem}
                    data={bannerSlides}
                    showNextButton={false}
                    showDoneButton={false}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                    autoplay={true}
                    autoplayTimeout={3}
                    style={styles.bannerContainer}
                />
            </View>

            {/* Popular Items */}
            <View style={styles.popularItemsContainer}>
                <Text style={styles.popularItemsText}>Popular Items</Text>
                <Text style={styles.viewAllText}>View All</Text>
            </View>

            {/* 2 Bức ảnh và chú thích */}
            <View style={styles.itemsContainer}>
                <View style={styles.item}>
                    <Image source={require('../assets/burger.png')} style={styles.itemImage} />
                    <Text style={styles.itemLabel}>BURGER</Text>
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/pizza.png')} style={styles.itemImage} />
                    <Text style={styles.itemLabel}>PIZZA</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 120,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    locationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    locationLabel: {
        fontSize: 14,
        color: '#A9A9A9', // Màu xám
        marginBottom: 5,
    },
    locationInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 5,
        fontSize: 16,
    },
    sampleImage: {
        width: 40,
        height: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A43EC', // Màu xanh biển đậm
        borderRadius: 25,
        padding: 15,
        marginLeft: 30,
        marginBottom: 20,
        width: '80%',
        marginTop: -10,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        paddingLeft: 10,
    },
    slide1: {
        backgroundColor: '#29D697',
    },
    searchImage: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    slide: {
        width: width - 290, // Giảm kích thước để phù hợp với không gian
        height: 90, // Chiều cao của mỗi slide
        backgroundColor: '#D3D3D3', // Màu nền xám
        borderRadius: 10, // Bo góc
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerWrapper: {
        marginTop: 20,
    },
    bannerContainer: {
        height: 200, // Chiều cao của banner
        marginBottom: 20,
    },
    bannerSlide: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    bannerImage: {
        width: width - 40, // Giảm kích thước để phù hợp với không gian
        height: '100%',
        borderRadius: 15,
    },
    dotStyle: {
        backgroundColor: '#C4C4C4',
        marginTop: 80,
    },
    activeDotStyle: {
        backgroundColor: '#333',
        marginTop: 80,
    },
    popularItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    popularItemsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAllText: {
        fontSize: 14,
        color: '#333', // Màu xanh biển đậm
    },
    itemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    item: {
        alignItems: 'center',
    },
    itemImage: {
        width: (width - 60) / 2, // Chia đều cho 2 item
        height: 150, // Chiều cao của mỗi ảnh
        borderRadius: 10,
    },
    itemLabel: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
