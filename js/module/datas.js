const datas = async () => {
    return await fetch('../../config.json').then(el => el.json());
}

export default datas;