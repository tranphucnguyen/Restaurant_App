import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['transparent', '#FEFFBF']} // Màu gradient cho header
                style={styles.header}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={18} color="black" style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Shopping Cart</Text>
                <Image
                    source={require('../assets/trash.png')} // Đường dẫn tới ảnh của bạn
                    style={styles.image}
                />
            </LinearGradient>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/burger.png')} // Đường dẫn tới ảnh chính
                    style={styles.mainImage}
                />
                <Image
                    source={require('../assets/discount.png')} // Đường dẫn tới ảnh nhỏ ở trên
                    style={styles.smallImage}
                />
                <Image
                    source={require('../assets/listburger.png')} // Đường dẫn tới ảnh ở dưới
                    style={styles.bottomImage}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <Text style={[styles.footerText, styles.burgerText]}>BURGER</Text>
                    <Image
                        source={require('../assets/rating.png')} // Đường dẫn tới ảnh dưới "BURGER"
                        style={styles.footerImageRating}
                    />
                    <Image
                        source={require('../assets/locat.png')} // Đường dẫn tới ảnh dưới "BURGER"
                        style={styles.footerImage}
                    />
                </View>
                <View style={styles.footerSection}>
                    <Text style={[styles.footerText, styles.priceText]}>$28</Text>
                    <Image
                        source={require('../assets/quantity.png')} // Đường dẫn tới ảnh dưới "$28"
                        style={styles.footerImageQuantity}
                    />
                    <View style={styles.pointContainer}>
                        <Image
                            source={require('../assets/point.png')} // Đường dẫn tới ảnh dưới "$28"
                            style={styles.footerImagePoint}
                        />
                    </View>
                </View>
                <View style={styles.additionalImagesContainer}>
                    <Image
                        source={require('../assets/card.png')} // Đường dẫn tới ảnh bổ sung đầu tiên
                        style={styles.cardImage}
                    />
                    <Image
                        source={require('../assets/payment.png')} // Đường dẫn tới ảnh bổ sung thứ hai
                        style={styles.paymentImage}
                    />
                    <Image
                        source={require('../assets/List.png')} // Đường dẫn tới ảnh bổ sung thứ ba
                        style={styles.anotherImage}
                    />
                </View>
            </View>
            <View style={styles.confirmButtonContainer}>
                <TouchableOpacity style={styles.confirmButton} onPress={() => alert('Order Confirmed!')}>
                    <Text style={styles.confirmButtonText}>Confirm Order</Text>
                </TouchableOpacity>
            </View>
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
        height: 120,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title: {
        fontSize: 18,
        fontStyle: 'Poppins',
        marginBottom: 50,
    },
    arrowIcon: {
        marginBottom: 50, // Đặt marginBottom của icon là 50
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginBottom: 50,
    },
    imageContainer: {
        position: 'relative',
        alignItems: 'center',
        bottom: 50,
    },
    mainImage: {
        width: '90%',
        height: 200,
        borderRadius: 20,
    },
    smallImage: {
        position: 'absolute',
        top: 40, // Điều chỉnh vị trí top theo ý muốn
        right: 30, // Điều chỉnh vị trí right theo ý muốn
        width: 50,
        height: 50,
        borderRadius: 25, // Điều chỉnh nếu bạn muốn bo góc tròn
    },
    bottomImage: {
        position: 'absolute',
        width: '80%',
        height: 150,
        resizeMode: 'contain',
        bottom: -70, // Điều chỉnh vị trí bottom theo ý muốn
        zIndex: 2, // Đặt chỉ số zIndex cao hơn
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '90%',
        height: '100%',
        marginLeft: 20,
        backgroundColor: '#F5F5F5', // Màu nền của footer
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 50, // Điều chỉnh vị trí bottom theo ý muốn
        zIndex: -1, // Đặt chỉ số zIndex thấp hơn bottomImage
    },
    footerSection: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'Poppins',
        color: '#242424',
    },
    burgerText: {
        marginTop: 40,
        marginBottom: 10,
        marginRight: 80, // Thêm marginBottom cho "BURGER"
    },
    priceText: {
        marginTop: 40,
        marginLeft: 40,
        marginBottom: 10, // Thêm marginBottom cho "$28"
        color: '#7D78F1',
    },
    footerImage: {
        marginBottom: 10,
        // Thêm marginBottom cho các ảnh
    },
    footerImageQuantity: {
        marginBottom: 10,
        marginLeft: 20, // Thêm marginLeft cho ảnh quantity
    },
    footerImageRating: {
        marginBottom: 10,
        marginRight: 90, // Thêm marginLeft cho ảnh rating
    },
    pointContainer: {
        backgroundColor: '#A9A6FF',
        borderRadius: 5,
        padding: 5,
        height: 68,
        width: 50,
        bottom: 5,
    },
    footerImagePoint: {
        marginLeft: 10,
        marginTop: 15,
    },
    additionalImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        top: 200,
        right: 380,
    },
    cardImage: {
        zIndex: 1,
        left: 50,
        top: 15,
    },
    paymentImage: {
        width: '127%',
        borderRadius: 11,
    },
    anotherImage: {
        width: '124%',
        height: '19%',
        top: 58,
        right: 330,
        resizeMode: 'contain',
    },
    confirmButtonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: '#4A43EC',
        paddingVertical: 18,
        paddingHorizontal: 25,
        borderRadius: 25,
        width: '70%',
        height: 55,
        marginBottom: 20,
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontStyle: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CartScreen;
