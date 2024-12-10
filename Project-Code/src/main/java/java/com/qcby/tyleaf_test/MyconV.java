package com.qcby.tyleaf_test;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class MyconV implements ConstraintValidator<MyConstraint, String> {

    @Override
    public void initialize(MyConstraint m) {

    }


    @Override
    public boolean isValid(String s, ConstraintValidatorContext context) {
        // TODO Auto-generated method stub
        if(!(s.equals("北京")||s.equals("上海")||s.equals("杭州")))
            return false;
        else {
            return true;
        }
    }

}