// 1. có một cái khung, sau khi ta click nó sẽ tự thay đổi màu
// 2. nếu ta reload lại trang, thì trạng thái màu lúc trước vẫn giữ nguyên
import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function randomeColor() {
    const ARR_COLOR = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const indexColor = Math.trunc(Math.random() * ARR_COLOR.length)
    return ARR_COLOR[indexColor]
}

function ColorBox() {
    // nếu bỏ ở trên thì mỗi lần render component thì nó sẽ lại phải chạy lấy ra
    // color, mặc dù ta không sử dụng.
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color')
        return initColor
    })

    function handleColorClick() {
        const colorRandom = randomeColor()
        setColor(colorRandom)
        localStorage.setItem('color', colorRandom)
        return;
    }

    return (
        <div style = {{
            backgroundColor: color,
          
        }}
        onClick = {handleColorClick}
        className = "color-box"
        >
        </div>
    );
}

export default ColorBox;

