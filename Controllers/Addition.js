const Add = (req, res) => {
    let a = 5;
    let b = 4;
    res.send(`Addition of number ${a} + ${b} = ${a + b}`)

    // return (
    //     <>
    //         <input type="number"/> <br/>
    //         <input type="number"/> <br/>
    //     </>
    // )
}

export default Add;