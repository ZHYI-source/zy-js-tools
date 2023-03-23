/**
 * 日期格式化
 *  let date = new Date()
 dateFormat("YYYY-mm-dd HH:MM", date)
 >>> 2019-06-06 19:45`
 * */
const dateFormat = function (fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

/*随机颜色*/
const getRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}

module.exports = {
    getRandomColor,
    dateFormat
}

/**
 *@author ZY
 *@date 2023/3/23 21:57
 *@Description:
 *
 * TODO: 1.修改插件版本号；2.输入命令发布插件：npm publish --access=public
 *
 *
 */
