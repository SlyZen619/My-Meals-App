import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MEALS = [
  { id: '1', categoryId: '1', title: 'Cơm tấm', imageUrl: 'https://tinyurl.com/2ruktyer' },
  { id: '2', categoryId: '1', title: 'Cơm chiên dương châu', imageUrl: 'https://tinyurl.com/ykwmhbkz' },
  { id: '3', categoryId: '1', title: 'Cơm chiên dưa bò', imageUrl: 'https://tinyurl.com/3xryx6c8' },

  { id: '4', categoryId: '2', title: 'Phở', imageUrl: 'https://tinyurl.com/56murrmc' },
  { id: '5', categoryId: '2', title: 'Mì Quảng', imageUrl: 'https://tinyurl.com/mvrtynmf' },
  { id: '6', categoryId: '2', title: 'Hủ tiếu', imageUrl: 'https://tinyurl.com/2p8j2wwf' },

  { id: '7', categoryId: '3', title: 'Xôi đậu xanh', imageUrl: 'https://tinyurl.com/mryhxj6n' },
  { id: '8', categoryId: '3', title: 'Xôi gấc', imageUrl: 'https://tinyurl.com/4kv4wyvn' },
  { id: '9', categoryId: '3', title: 'Xôi xéo', imageUrl: 'https://tinyurl.com/3j5m7y2c' },

  { id: '10', categoryId: '4', title: 'Bánh mì thịt', imageUrl: 'https://tinyurl.com/2va8pnvs' },
  { id: '11', categoryId: '4', title: 'Bánh mì chả cá', imageUrl: 'https://tinyurl.com/bdf3ckvs' },
  { id: '12', categoryId: '4', title: 'Bánh mì kẹp xúc xích', imageUrl: 'https://tinyurl.com/4d55t3dk' },

  { id: '13', categoryId: '5', title: 'Gỏi cuốn', imageUrl: 'https://tinyurl.com/3a3pj7y6' },
  { id: '14', categoryId: '5', title: 'Gỏi đu đủ', imageUrl: 'https://tinyurl.com/yczd7tc7' },
  { id: '15', categoryId: '5', title: 'Gỏi bắp bò', imageUrl: 'https://tinyurl.com/yc2h7t4m' },

  { id: '16', categoryId: '6', title: 'Chè đậu đỏ', imageUrl: 'https://tinyurl.com/ycj9bj74' },
  { id: '17', categoryId: '6', title: 'Chè ba màu', imageUrl: 'https://tinyurl.com/3u7h7wyd' },
  { id: '18', categoryId: '6', title: 'Chè thái', imageUrl: 'https://tinyurl.com/2s3t238w' },
];

const MealsScreen = ({ route }) => {
  const { categoryId } = route.params;

  // Lọc món ăn theo categoryId và giới hạn số lượng món ăn hiển thị
  const displayedMeals = MEALS
    .filter(meal => meal.categoryId === categoryId)
    .slice(0, 3);

  const renderMealItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.mealItem}>
        <View>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  mealItem: {
    height: 180, // Chiều cao tổng thể vừa đủ cho hình vuông và tiêu đề
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 3,
    justifyContent: 'center', // Canh giữa nội dung bên trong
    alignItems: 'center',
  },
  mealImage: {
    width: 120, // Chiều rộng cụ thể cho hình vuông nhỏ
    height: 120, // Chiều cao bằng với chiều rộng để tạo hình vuông
    borderRadius: 10, // Bo tròn các góc của hình ảnh
  },
  mealTitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
  },
});





export default MealsScreen;
