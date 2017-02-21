"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    eslint = require("gulp-eslint"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    maps = require("gulp-sourcemaps"),
    imagemin = require("gulp-imagemin"),
    useref = require("gulp-useref"),
    gulpif = require("gulp-if"),
    csso = require("gulp-csso"),
    del = require("del"),
    browserSync = require('browser-sync').create();