<?php

namespace Faker\Provider\vi_VN;

class Person extends \Faker\Provider\Person
{
    protected static $maleNameFormats = array(
        '{{lastName}} {{firstNameMale}}',
        '{{titleMale}}. {{lastName}} {{firstNameMale}}',
        '{{lastName}} {{middleNameMale}} {{firstNameMale}}',
        '{{titleMale}}. {{lastName}} {{middleNameMale}} {{firstNameMale}}',
    );

    protected static $femaleNameFormats = array(
        '{{lastName}} {{firstNameFemale}}',
        '{{titleFemale}}. {{lastName}} {{firstNameFemale}}',
        '{{lastName}} {{middleNameFemale}} {{firstNameFemale}}',
        '{{titleFemale}}. {{lastName}} {{middleNameFemale}} {{firstNameFemale}}',
    );

    protected static $middleNameFormat = array(
      '{{firstNameMale}}',
      '{{firstNameFemale}}',
    );

    protected static $firstNameMale = array(
        'Иванов', 'Смирнов',
        'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров',
        'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев',
    );

    protected static $middleNameMale = array(
        'Александрович', 'Игоревич',
        'Сергеевич', 'Геннадьевич', 'Никитич', 'Ильич',
    );

    protected static $firstNameFemale = array(
        'Иванов', 'Смирнов',
        'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров',
        'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев',
    );
    protected static $middleNameFemale = array(
        'Александрович', 'Игоревич',
        'Сергеевич', 'Геннадьевич', 'Никитич', 'Ильич',
    );
    protected static $lastName = array(
        'Алексей', 'Вадим',
        'Владимир', 'Валентин', 'Денис',
        'Егор', 'Кирилл', 'Леонид', 'Максим', 'Матвей', 'Никита',
    );

    protected static $titleMale = array('Cụ', 'Ông', 'Bác', 'Chú', 'Anh', 'Em');

    protected static $titleFemale = array('Cụ', 'Bà', 'Bác', 'Cô', 'Chị', 'Em');

    public function middleName($gender = null)
    {
        if ($gender === static::GENDER_MALE) {
            return static::middleNameMale();
        } elseif ($gender === static::GENDER_FEMALE) {
            return static::middleNameFemale();
        }

        return $this->generator->parse(static::randomElement(static::$middleNameFormat));
    }

    public static function middleNameMale()
    {
        return static::randomElement(static::$middleNameMale);
    }

    public static function middleNameFemale()
    {
        return static::randomElement(static::$middleNameFemale);
    }
}