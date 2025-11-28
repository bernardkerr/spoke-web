# **Electrical**

## **Overview**

The Electrical domain provides the energy and communication infrastructure for robotic systems. Without reliable power distribution and robust signal transmission, no robot can function. The Electrical domain solves the fundamental challenge: delivering the right power to the right place while maintaining clean, reliable communication between all system components.

The Electrical domain is organized into specialized subsystems:
<div style={{ marginLeft: '2rem' }}>
**1. Power** \- Energy storage, regulation, and distribution  
**2. Controllers** \- Local processing and real-time control  
**3. Compute** \- Central processing and AI computation
</div>

Each subsystem provides:
<div style={{ marginLeft: '2rem' }}>
**Assembly** \- Plug-and-play connections with pre-routed cable paths; no custom wiring harnesses to design  
**Mounting** \- Integration with mechanical structures for secure placement  
**Protection** \- Shielding and enclosure for sensitive electronics  
**Integration** \- Standardized connectors, power rails, and communication buses with verified signal integrity and EMI characteristics
</div>


---

## **Electrical Domain Integration**
<div style={{ marginLeft: '2rem' }}>
The Electrical subsystems work together as a verified system:

**1. Power** provides the energy foundation:

> Battery systems with verified capacity for robot requirements  
> Regulated voltage rails for all components  
> Distribution network reaching all subsystems  
> Monitoring and protection for system safety

**2. Controllers** handle real-time operations:

> Distributed processing across the robot  
> Direct connection to sensors and actuators  
> Network communication to main compute  
> Standardized interfaces for plug-and-play operation

**3. Compute** provides intelligence and coordination:

> High-level decision-making and AI processing  
> System-wide coordination of all controllers  
> Data logging and analysis  
> User and network interfaces

**Cross-domain verification:**

> Mechanical: All electrical components mount securely to Structure with proper thermal management  
> Electrical: Power, signals, and communication flow reliably between all components  
> Computational: Software can discover and communicate with all electrical subsystems

**Integration Benefits:**

> Pre-routed cable paths through mechanical Structure  
> Standardized connectors prevent wiring errors  
> Verified power budgets ensure sufficient capacity  
> EMI testing confirms signal integrity  
> Auto-discovery means software recognizes hardware configuration

This integration ensures that when you assemble electrical components, power reaches all devices, signals transmit reliably, and the computational layer can immediately work with the available hardware.
</div>

---

## **1.Power**
<div style={{ marginLeft: '2rem' }}>
### **The Role of Power**

The entire robot's existence depends on power. SPOKE Power systems provide:

> **Energy storage** \- Battery systems sized for robot requirements  
> **Regulation** \- Voltage conversion and conditioning for different components  
> **Distribution** \- Power rails delivering energy throughout the robot  
> **Monitoring** \- Voltage and current sensing for system health

### **Power Components**

**Battery Systems**

> Standardized form factors for mechanical mounting  
> Multiple capacity options for different runtime requirements  
> Integrated battery management systems (BMS)  
> Connector standardization for charging and system power  
> Charging infrastructure (wired and wireless options)  
> Charge management circuitry for safe, efficient charging  
> Wireless charging coils and alignment mechanisms  
> Charging status monitoring and communication

**Power Regulation**

> Buck converters for stepping down voltage  
> Boost converters for stepping up voltage  
> Linear regulators for low-noise applications  
> Multiple output rails (3.3V, 5V, 12V, motor voltages)

**Power Distribution**

> Standardized power buses throughout the robot  
> Keyed connectors preventing reverse polarity  
> Fused protection on critical circuits  
> Current monitoring on distribution branches

### **Power Integration**

Power connects to the entire system through verified interfaces:

> **Mechanical:** Battery and regulator mounting to Structure frames with thermal management  
> **Electrical:** Standardized voltage rails and connector types across all components  
> **Computational:** Power state monitoring and control through system software

**Power Distribution Architecture:**

> Battery provides primary energy storage  
> Main regulator converts to system voltages  
> Power rails distribute to subsystems  
> Local regulators provide point-of-load conditioning  
> Monitoring systems track consumption and health

### **Power Protection and Safety**

All power systems include:

> Overcurrent protection via fuses or electronic breakers  
> Reverse polarity protection on all connectors  
> Thermal management for high-current components  
> Emergency shutdown capability  
> Cable routing that prevents mechanical damage
</div>

---

## **2.Controllers**
<div style={{ marginLeft: '2rem' }}>
### **The Role of Controllers**

Inside the robot, local processing is handled by microcontrollers. These provide real-time control for actuators and sensors while communicating with the main compute module. Where specialized processing is required, FPGAs can sometimes be the perfect solution.

Controllers enable:

> **Real-time control** \- Precise timing for motor control and sensor reading  
> **Local processing** \- Immediate response without main computer latency  
> **Distributed architecture** \- Multiple controllers handling different subsystems  
> **Specialized processing** \- FPGA acceleration for specific tasks

### **Controller Types**

**Microcontrollers**

> Standard platforms (ESP32, STM32, Arduino-compatible)  
> Real-time motor control and sensor interfacing  
> Communication via micro network to main compute  
> Standardized firmware interfaces

**Motor Controllers**

> Interface with actuator modules (motors, servos, wheels, belts, pulleys, gears)  
> PWM generation for motor speed control  
> Encoder feedback processing  
> Current sensing and protection  
> Standardized command protocols

**Sensor Interface Controllers**

> Interface with sensor modules (IMU, cameras, touch sensors, microphones)  
> Analog-to-digital conversion for analog sensors  
> Digital sensor protocols (I2C, SPI, UART, USB, CSI)  
> Sensor fusion preprocessing  
> Timestamp synchronization across sensors

**FPGA Modules**

> High-speed signal processing  
> Custom sensor protocols  
> Vision preprocessing  
> Parallel computation for specific algorithms

### **Controller Communication**

Controllers are interconnected via a micro network architecture:

> **Micro network** \- Lightweight communication bus between controllers and main compute  
> **Standardized protocols** \- Common message formats across all controllers  
> **Time synchronization** \- Coordinated timing for multi-controller systems  
> **Efficient data transfer** \- Optimized for real-time control and sensor data

**Communication Architecture:**

> Main compute module acts as network hub  
> Controllers connect via micro network  
> Standardized message protocols enable plug-and-play operation  
> Auto-discovery allows system to recognize connected controllers

### **Controller Integration**

Controllers bridge mechanical, electrical, and computational domains:

> **Mechanical:** Mounting to Structure frames near actuators and sensors  
> **Electrical:** Power from distribution system, signal connections to sensors/actuators  
> **Computational:** Network communication with main compute, firmware updates over network

**Controller-Sensor-Actuator Integration:**

> Controller mounts to Structure near devices it controls  
> Power connection from distribution system  
> Signal connections to sensors and actuators via standardized cables  
> Network connection to main compute  
> Firmware recognizes connected devices automatically

### **Controller Protection and Assembly**

All controller systems include:

> Protective enclosures preventing shorts and debris  
> Standardized mounting to Structure frames  
> Cable routing with strain relief  
> Test points for debugging  
> Firmware update capability without disassembly
</div>

---

## **Compute**
<div style={{ marginLeft: '2rem' }}>
### **The Role of Compute**

The critical core of the robot is the main source of compute. This is where larger AI algorithms run. Typically these are Linux-based single-board computers (SBCs) that provide the intelligence and decision-making capability for the entire system.

Compute systems enable:

> **High-level control** \- Planning, navigation, and decision-making  
> **AI processing** \- Neural networks, computer vision, and machine learning  
> **System coordination** \- Managing all controllers and subsystems  
> **User interface** \- Communication with operators and external systems

### **Compute Components**

**Single-Board Computers (SBCs)**

> Linux-based platforms (Raspberry Pi, NVIDIA Jetson, custom boards)  
> Multi-core processors for parallel computation  
> GPU acceleration for AI workloads  
> Standardized I/O interfaces (USB, Ethernet, HDMI)

**AI Accelerators**

> Neural processing units (NPUs) for inference  
> GPU modules for vision and deep learning  
> Coral TPU or similar edge AI accelerators  
> Standardized integration with main SBC

**Storage**

> SD cards or eMMC for system software  
> SSD storage for datasets and logs  
> Network-attached storage options  
> Hot-swappable storage for data collection

**Communication Interfaces**

> WiFi and Bluetooth for wireless connectivity  
> Ethernet for wired network and controller communication  
> USB for peripherals and debugging  
> Serial interfaces for legacy device support

### **Compute Architecture**

The main compute module serves as the robot's brain:

> **Operating system:** Linux provides flexibility and standard tooling  
> **ROS integration:** Robot Operating System for modularity and community support  
> **Network hub:** All controllers connect through compute module  
> **Data pipeline:** Sensor data flows through compute for processing and logging

**Compute Integration with Controllers:**

> Main compute runs high-level software (navigation, AI, planning)  
> Controllers handle real-time tasks (motor control, sensor reading)  
> Micro network connects compute to all controllers  
> Standardized protocols enable seamless communication  
> Compute coordinates all subsystems into coherent robot behavior

### **Compute Integration**

Compute connects across all domains:

> **Mechanical:** Mounting to Structure with thermal management and vibration isolation  
> **Electrical:** Power from main distribution, network connectivity to controllers  
> **Computational:** Software stack, AI models, system orchestration

**Compute-Power-Cooling Integration:**

> SBC mounts to Structure frame with thermal interface  
> Regulated power supply from Power system  
> Active or passive cooling based on processing load  
> Network connections to all controllers  
> Storage and peripherals via standardized connectors

### **Compute Protection and Assembly**

All compute systems include:

> Protective enclosures with thermal management  
> Shock-mounted or vibration-isolated mounting  
> Easy access for storage swapping and debugging  
> Display/keyboard connectivity for local access  
> Remote access capability for development and monitoring
</div>

---

