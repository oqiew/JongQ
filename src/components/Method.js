import React from "react";

export function isEmpty(value) {
    if (value === '' || value === null || value === undefined) {
        return true
    } else {
        return false
    }
}