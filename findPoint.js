// Есть динамическая сетка (например: 6х4 или 4х4),
// нужно найти координаты свободного места для встраиваемого элемента
// (единственный результат вхождения, не множество),
// размер элемента может быть разные (например: 1х1 или 4х2).

// Input:

// Сетка - 6х4, board
// Элемент - 3х2, elem
// Занятые координаты, arr - [{ x: 0, y: 0}, { x: 1, y: 0}, { x: 0, y: 1}, { x: 1, y: 1}, { x: 4, y: 0}]

// Output: { x: 2, y: 1 }

function findPoint(board, elem, arr) {
    console.log("Погнали!");

    // Элемент больше чем борд
    if (board.w < elem.w || board.h < elem.h) {
        console.log("Переполнение");
        return null;
    }

    // строим множество занятых координат
    const occupied = new Set(arr.map((i) => `${i.x},${i.y}`));

    console.log(JSON.stringify([...occupied.values()]));

    // итерируемся по строкам
    for (let y = 0; y < board.h; y++) {
        // небезопасно -- вываливаемся за предел
        if (y + elem.y > board.h) {
            console.log("Выходим из цикла");
            break;
        }

        // итерируемся по колонкам
        for (let x = 0; x < board.w; x++) {
            // небезопасно -- вываливаемся за предел
            if (x + elem.w > board.w) {
                console.log("Выходим из цикла по строке");
                break;
            }

            // строим координату
            const point = `${x},${y}`;

            console.log("Point", point);

            // координата занята
            if (occupied.has(point)) {
                console.log("Выходим из итерации");
                continue;
            }

            console.log("Координата свободна, можно проверять подмножество");

            // строим подмассив координат
            const subset = buildSubset(x, y, elem);

            console.log("Подмножество", subset);

            // смотрим есть пересечения
            if (subset.some((i) => occupied.has(i))) {
                console.log(
                    "В подмножестве есть пересечения, выходим из итерации"
                );
                continue;
            }

            return point;
        }
    }

    console.log("Нет места для элемента на этом борде");

    return null;
}

function buildSubset(x, y, elem) {
    const subset = [];

    for (let subY = 0; subY < elem.h; subY++) {
        for (let subX = 0; subX < elem.w; subX++) {
            subset.push(`${x + subX},${y + subY}`);
        }
    }

    return subset;
}

// x x . x . .
// x x o o o .
// . . o o o .
// . . . . . .
// 2,1
console.log(
    findPoint({ w: 6, h: 4 }, { w: 3, h: 2 }, [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 4, y: 0 },
    ])
);

// x x . x . x .
// x x x o o . .
// . . . o o . .
// . . . . . . .
// 3,1
console.log(
    findPoint({ w: 7, h: 4 }, { w: 2, h: 2 }, [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 3, y: 0 },
        { x: 5, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ])
);

// x x x
// . . .
// x x x
// null, нет места
console.log(
    findPoint({ w: 3, h: 3 }, { w: 2, h: 2 }, [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 3, y: 2 },
    ])
);

// null, переполнение
console.log(findPoint({ w: 3, h: 3 }, { w: 4, h: 4 }, []));
