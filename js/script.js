// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function updateCookieCount() {
  // Example functionality for updating the cookie count
  const resultOutput = document.getElementById("result-output");

  let currentCount = parseInt(localStorage.getItem("cookieCount")) || 0;
  currentCount++;
  localStorage.setItem("cookieCount", currentCount);

  resultOutput.textContent = `You have clicked ${currentCount} times`;
}
