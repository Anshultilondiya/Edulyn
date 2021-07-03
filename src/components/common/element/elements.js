import { makeAutoObservable } from "mobx"

function createColors(obj) {
    return makeAutoObservable({
        colors: {
            bg1: "#182B49",
            bg2: "#F6F9FF",
            bg3: "#11B67A",
            gr_bg: "linear-gradient(90deg, #11B67A 0%, #009444 100%)",
            gr_bg2: "linear-gradient(90deg, #009444 0%, #11B67A 100%)",
            copy_bg: "#122340",
            blue: "#2c97ea",
            green: "#11B67A",
            green2: "#00a76a",
            red: "#ff6f6f",
            purple: "#84479c",
            yellow: "#fbab19",
            black1: "#182B49",
            black2: "#444444",
            text1: "#555555",
            text2: "#666666",
            text3: "#969696",
            text4: "#aaaaaa",
            text5: "#cccccc",
            border1: "#eeeeee",
            border2: "#3e3e3e",
            border3: "#dddddd",
            footer1: "#1a1b25",
            footer2: "#16171f",
            ftext: "#8D8E92",
            white: "ffffff"
        },
        getColor() {
            return this.colors
        },
        dynamicColor(obj) {
            this.colors.bg1 = obj.primary;
            this.colors.bg2 = obj.secondary;
            this.colors.bg3 = obj.ternary;
            console.log("After", this.colors)
        }
    })
}

export const colorStore = createColors();

export let colors = {
    bg1: "#182B49",
    bg2: "#F6F9FF",
    bg3: "#11B67A",
    gr_bg: "linear-gradient(90deg, #11B67A 0%, #009444 100%)",
    gr_bg2: "linear-gradient(90deg, #009444 0%, #11B67A 100%)",
    copy_bg: "#122340",
    blue: "#2c97ea",
    green: "#11B67A",
    green2: "#00a76a",
    red: "#ff6f6f",
    purple: "#84479c",
    yellow: "#fbab19",
    black1: "#182B49",
    black2: "#444444",
    text1: "#555555",
    text2: "#666666",
    text3: "#969696",
    text4: "#aaaaaa",
    text5: "#cccccc",
    border1: "#eeeeee",
    border2: "#3e3e3e",
    border3: "#dddddd",
    footer1: "#1a1b25",
    footer2: "#16171f",
    ftext: "#8D8E92",
    white: "ffffff"
}

export const dynamicColor = (obj) => {
    colors.bg1 = obj.primary;
    colors.bg2 = obj.secondary;
    colors.bg3 = obj.ternary;
    console.log("After", colors)
}

export const colorFun = (obj) => {
    return colors;
}


export const fonts = {

    roboto: "'Roboto', sans-serif",
    poppins: "'Poppins', sans-serif",

}

