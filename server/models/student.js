'use strict';
const { Model } = require('sequelize');
const { enc,dec } = require("../middleware/encryptor"); 

module.exports = (sequelize, Sequelize) => {
  class Student extends Model {
    static associate(models) {
        Student.belongsTo(models.User, {
          foreignKey: 'id'
        });
    }
  };
  Student.init({
    user_id: Sequelize.INTEGER, 
    name: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('name');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('name', enc(value));
      }
    }
    , 
    father_name: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('father_name');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('father_name', enc(value));
      }
    },
    mother_name: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('mother_name');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('mother_name', enc(value));
      }
    },
    last_name: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('last_name');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('last_name', enc(value));
      }
    },
    mobile_num: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('mobile_num');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('mobile_num', enc(value));
      }
    }, 
    phone_number: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('phone_number');
        return dec(rawValue);
      },
      set(value) {      
        this.setDataValue('phone_number', enc(value));
      }
    },
    college_name: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('college_name');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('college_name', enc(value));
      }
    }, 
    address:{ 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('address');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('address', enc(value));
      }
    },
    city: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('city');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('city', enc(value));
      }
    },
    country: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('country');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('country', enc(value));
      }
    },
    postal_code:{ 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('postal_code');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('postal_code', enc(value));
      }
    },
    current_course : { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('current_course');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('current_course', enc(value));
      }
    },
    latest_marks : { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('latest_marks');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('latest_marks', enc(value));
      }
    }, 
    yearly_family_income :{ 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('yearly_family_income');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('yearly_family_income', enc(value));
      }
    },
    aadhar_number:{ 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('aadhar_number');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('aadhar_number', enc(value));
      }
    },
    applied_course: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('applied_course');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('applied_course', enc(value));
      }
    },
    applied_course_fee: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('applied_course_fee');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('applied_course_fee', enc(value));
      }
    },
    about_me: { 
      type: Sequelize.STRING,
      get() {
        const rawValue = this.getDataValue('about_me');
        return dec(rawValue);
      },
      set(value) {
        this.setDataValue('about_me', enc(value));
      }
    },
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
