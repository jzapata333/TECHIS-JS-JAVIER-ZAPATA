# You are asked to ensure first and last names of people begin with a capital letter in their passports.
# For example, alison heck should be capitalised as Alison Heck. Given a full name, your task is to
# capitalize the name appropriately.

def capitalize(name):
    a, b = name.split(' ', 1)
    fname = a.capitalize()
    lname = b.capitalize()
    capitalized = fname + ' ' + lname
    print(capitalized)


capitalize('javier zapata')
