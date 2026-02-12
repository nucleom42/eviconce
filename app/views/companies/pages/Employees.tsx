import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import './../styles/Employees.css';

export default function Employees({ dashboardData }) {
  const [employees, setEmployees] = useState(dashboardData?.employees || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [error, setError] = useState(null);

  // Open modal for creating new employee
  const handleCreate = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  // Open modal for editing employee
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  // Delete employee
  const handleDelete = async (id) => {
    if (!window.confirm('Ви впевнені, що хочете видалити цього працівника?')) {
      return;
    }

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setEmployees(employees.filter(emp => emp.id !== id));
      } else {
        const body = await response.json();
        setError(body.message || 'Помилка при видаленні');
      }
    } catch (err) {
      setError('Помилка при видаленні');
    }
  };

  // Handle save from form
  const handleSave = (savedEmployee) => {
    if (editingEmployee) {
      // Update existing
      setEmployees(employees.map(emp =>
        emp.id === savedEmployee.id ? savedEmployee : emp
      ));
    } else {
      // Add new
      setEmployees([...employees, savedEmployee]);
    }
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div className="employees-container">
      <div className="employees-header">
        <h2>Працівники</h2>
        <button className="btn-primary" onClick={handleCreate}>
          + Додати працівника
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {employees.length === 0 ? (
        <div className="empty-state">
          <p>Немає працівників. Додайте першого!</p>
        </div>
      ) : (
        <div className="employees-table">
          <table>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Дії</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone || 'N/A'}</td>
                  <td className="actions content-center">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(employee)}
                    >
                      Редагувати
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EmployeeForm
              role="employee"
              employee={editingEmployee}
              onSave={handleSave}
              onCancel={handleCancel}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
