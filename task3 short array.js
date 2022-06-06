const func = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + 1 === arr[i + 1]) && (arr[i] + 2 === arr[i + 2])) {
            const arr2 = [arr[i], arr[i + 1], arr[i + 2]];
            for (let j = i + 3; j < arr.length; j++) {
                if (arr[j] - 1 === arr2[arr2.length - 1]) {
                    arr2.push(arr[j]);
                } else {
                    break;
                }
            }
            res.push(arr2);
            i = i + arr2.length - 1
        } else {
            res.push(arr[i])
        }
    }
    const res2 = res.map((item) => {
        if (Array.isArray(item)) {
            return item[0] + '-' + item[item.length - 1];
        } else {
            return item
        }
    });


    return (res2.join());
};

func([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
