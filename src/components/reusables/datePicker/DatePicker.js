import { StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
import Label from '../label'
import DatePicker1 from 'react-native-date-picker'
import { COLOR, commonStyles, TEXT_STYLE, hp } from '../../../data/StyleGuides'
import { Pressable } from '..'

const DatePicker = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
        const year = date.getFullYear() % 100; // Get last two digits of year

        return `${day}/${month}/${year}`;
    };


    return (
        <Pressable onPress={() => setOpen(true)}>
            <Label style={styles.labelColor}>{formatDate(date)}</Label>
            <DatePicker1
                modal
                open={open}
                date={date}
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => setOpen(false)}
            />
        </Pressable>
    )
}

export default memo(DatePicker)

const styles = StyleSheet.create({
})