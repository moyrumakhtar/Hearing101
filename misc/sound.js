import React, { useState, useEffect } from 'react'
import { StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const itemPlayer = ({ links }) => {
    const [items, state] = useMultiLinks(links)

    return (
        <div>
            {items.map((item, i) => (
                <Play key={i} item={item} state={state(i)} />
            ))}
        </div>
    )
}

const Play = ({ item, state }) => (
    <View style={styles.con}>
        <button style={styles.button} onClick={state}>
            {item.playing ? 'STOP' : 'PLAY'}
        </button>

        <TouchableOpacity
            onPress={() => CanHear()}
            style={styles.icon}>
            <Ionicons name="checkmark-circle" size={25} />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => CantHear()}
            style={styles.icon}>
            <Ionicons name="close-circle" size={25} />
        </TouchableOpacity>

    </View>

)

const CanHear = () => (
    console.log("CAN HEAR")

)

const CantHear = () => (
    console.log("CANT HEAR")
)

const useMultiLinks = links => {
    const [ss] = useState(
        links.map(link => {
            return {
                audio: new Audio(link), link,
            }
        }),
    )
    const [items, setItems] = useState(
        links.map(link => {
            return {
                playing: false, link, hear: false
            }
        }),
    )

    useEffect(() => {
        ss.forEach((s, i) => {
            items[i].playing ? s.audio.play() : s.audio.pause()

        })
    }, [ss, items])

    const toggle = index => () => {
        const nItems = [...items]
        const cIndex = items.findIndex(p => p.playing === true)
        if (cIndex !== -1 && cIndex !== index) {
            nItems[cIndex].playing = false
            nItems[index].playing = true
        } else if (cIndex !== -1) {
            nItems[index].playing = false
        } else {
            nItems[index].playing = true
        }
        setItems(nItems)
    }

    useEffect(() => {
        ss.forEach((s, i) => {
            s.audio.addEventListener('ended', () => {
                const nItems = [...items]
                nItems[i].playing = false
                setItems(nItems)
            })
        })
        return () => {
            ss.forEach((s, i) => {
                s.audio.removeEventListener('ended', () => {
                    const nItems = [...items]
                    nItems[i].playing = false
                    setItems(nItems)
                })
            })
        }
    }, [])
    return [items, toggle]
}

const styles = StyleSheet.create
    ({
        button:
        {
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            padding: 10,
            marginRight: 140,
        },
        con:
        {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        icon:
        {
            margin: 5,
        },
    })

export default itemPlayer
