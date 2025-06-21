import sqlite3
"""A basic simple demo for using sqlite in Python"""
# connection
# insert
# modify
# delete
# find
# insert


def create_table(file: sqlite3.Connection, table_name: str = None):
    if table_name is None:
        print("Invalid table name")
        return

    # for a simple demo
    sql_create = f"""
    CREATE TABLE IF NOT EXISTS {table_name} (
        id integer PRIMARY KEY AUTOINCREMENT,
        name text UNIQUE not NULL,
        grades text
    );
    """
    cursor = file.cursor()
    cursor.execute(sql_create)


def insert_value(file: sqlite3.Connection, table_name, students):
    cursor = file.cursor()
    command = f"""
        INSERT INTO {table_name}(name,grades)
        VALUES(?,?)
    """
    cursor.execute(command, students)
    file.commit()

    return cursor.lastrowid


def find_value(file: sqlite3.Connection, table_name, id):
    cursor = file.cursor()
    cursor.execute(f"SELECT * FROM {table_name} WHERE id=?", (id,))
    row = cursor.fetchone()
    print(row)


if __name__ == "__main__":
    database = r"my_database_2.db"
    table_name = "test_grades"

    file = sqlite3.connect(database=database)

    if file is not None:
        create_table(file, table_name)

    student_1 = ("xiyuanyang", "100")
    student_2 = ("siyanli", "120")
    student_3 = ("test_user", "10")
    project_id_1 = insert_value(file, table_name, student_1)
    project_id_2 = insert_value(file, table_name, student_2)
    project_id_3 = insert_value(file, table_name, student_3)

    find_value(file, table_name, project_id_1)
    find_value(file, table_name, project_id_2)
    find_value(file, table_name, project_id_3)

    # fetch all:
    cursor = file.cursor()
    cursor.execute(f"SELECT * FROM {table_name}")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
