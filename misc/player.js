import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View } from 'react-native-web'

const multiItems = links => {
    useEffect(() => {
        s.forEach((ss, i) => {
            items[i].playing ? ss.audio.play() : ss.audio.pause()
        })
    }, [s, items])


    const [s] = useState(
        links.map(link => {
            return {
                audio: new Audio(link),
                link
            }
        }),
    )

    const [items, setItems] = useState(
        links.map(link => {
            return {
                playing: false,
                link
            }
        }),
    )

    const toggle = index => () {
        const nItems = [...items]
        const cIndex = items.findIndex(i => i.playing === true)

        if (cIndex !== -1 && cIndex !== index) {
            nItems[cIndex].playing = false
            nItems[index].playing = false
        }
        else if (cIndex !== -1) {
            nItems[index].playing = false
        }
        else {
            nItems[index].playing = true
        }
        setItems(nItems)
    }

    useEffect(() => {
        s.forEach((ss, i) => {
            ss.audio.addEventListener("ended", () => {
                const nItems = [...items]
                nItems[i].playing = false
                setItems(nItems)
            })
        })
        return () => {
            s.forEach((ss, i) => {
                ss.audio.removeEventListener("ended", () => {
                    const nItems = [...items]
                    nItems[i].playing = false
                    setItems(nItems)
                })
            })
        }
    }, [])
    return [items, toggle]
}

const multi = ({ links }) => {
    const [items, toggle] = multiItems(links)
    return (
        <div>


            {items.map((item, i) => (
                <buttomItem key={i} playerItem={item} toggle={toggle(i)} />
            ))}

        </div>
    )
}

const buttomItem = ({ playerItem, toggle }) => (
    <View>
        <TouchableOpacity onClick={toggle}>
            {playerItem.playing ? 'Pause' : 'Play'}
        </TouchableOpacity>
    </View>
)

export default multi