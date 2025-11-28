# **Mechanical**

## **Overview**

The SPOKE Mechanical domain provides the physical foundation for robotic systems. It addresses the fundamental challenges every robotics project faces: creating structure, enabling motion, and integrating components reliably.

The Mechanical domain is organized into specialized subsystems:
<div style={{ marginLeft: '2rem' }}>
**1. Structure** \- Frames and panels that form the robot body  
**2. Joints** \- Motion mechanisms including gears, belts, bearings, and actuators  
**3. Wheels** \- Ground contact and mobility systems  
**4. Grippers** \- End-effector mechanisms for manipulation
</div>
Each subsystem provides:
<div style={{ marginLeft: '2rem' }}>
**Assembly** \- Standardized screws and fasteners enable easy assembly, maintenance, and modification  
**Mounting** \- Standardized attachment points for components, sensors, and processors  
**Protection** \- Enclosure and shielding for sensitive elements  
**Integration** \- Provides cable routing and connector locations for electrical components
</div>

<details>
<summary>

## Integration

</summary>
<div style={{ marginLeft: '2rem' }}>
The Mechanical subsystems work together as a verified system:

**1. Structure** provides the foundation, with mounting points designed for:

> Joint mechanisms at articulation points  
> Motor mounts at actuation locations  
> Wheel assemblies at mobility points  
> Bearing housings at rotation points  
> Gripper mounting at arm endpoints or tool positions

**2. Joints** integrate motion systems through:

> Standardized mounting to Structure interfaces  
> Bearing support for all rotating elements  
> Motor coupling for actuation  
> Protected enclosures preventing interference  
> Linkages connecting to gripper mechanisms

**3. Wheels** complete the mobility system with:

> Standardized hub interfaces to joint components  
> Bearing-supported rotation  
> Motor adapter compatibility  
> Integration with Structure mounting points

**4. Grippers** enable manipulation through:

> Standardized mounting to Structure frames or arm assemblies  
> Actuation integration via Joint mechanisms and motors  
> Sensor mounting for force and tactile feedback  
> Modular finger designs for task-specific adaptation

**Cross-domain verification:**

> **Electrical:** Motor power and sensor wiring routes through **Structure**  
> **Computational:** Encoder feedback and control signals integrate seamlessly

This integration ensures that when you assemble mechanical components, mounting aligns, motion is unobstructed, and connections to other domains work without custom adaptation.
</div>
</details>
<details>
<summary>

## 1. Structure

</summary>

<div style={{ marginLeft: '2rem' }}>

### **The Role of Structure**

SPOKE Structure forms the skeleton and skin of the robot, providing:

> **Framework** \- The primary load-bearing structure  
> **Mounting surfaces** \- Attachment points for sensors, actuators, batteries, processors  
> **Enclosure** \- Protection for internal systems and cable routing  
> **Modularity** \- Expandable, reconfigurable architecture

Structure is made up of two primary components:

> **1. Frames** \- modular building blocks  
> **2. Panels** \- functional surfaces

### **1. Frames: Modular Building Blocks**
<div style={{ marginLeft: '2rem' }}>
**Frames** are the structural foundation, built from connectable sections:

> **Core sections** provide central structure and primary mounting  
> **Extension sections** expand the robot's footprint (front, rear, sides)  
> **Specialized sections** accommodate specific mechanisms or sensors

**Design Features:**

> Open internal volume maximizes space for components and wiring  
> Complete enclosure capability protects robot internals  
> Standardized connection interfaces enable frame-to-frame assembly
</div>
### **2. Panels: Functional Surfaces**
<div style={{ marginLeft: '2rem' }}>
**Panels** attach to frames through standardized mounting patterns and serve multiple functions:

> Protective outer surfaces  
> Internal component mounting  
> Access panels for maintenance and modification  
> Structural reinforcement  
> Sensor integration surfaces (touch, proximity, visual markers)

Panels use non-interfering mounting designs, enabling flexible configuration without mechanical conflicts.

</div>
### **Parametric Design System**
<div style={{ marginLeft: '2rem' }}>
All Structure components are fully parameterized for both standardization and customization.

#### **Standard Size Sets**

To promote compatibility and reuse, parameters are grouped into standard sets:

**Standard Set (Medium Scale)**

> Small side: 48mm  
> Large side: 96mm  
> Beam width: 6mm  
> Screw size: M3

*Rationale:* Highly divisible dimensions (48mm \= 2⁴ × 3\) enable flexible subdivision. 6mm beam width provides rigidity in common 3D printing materials.

**Compact Set (Small Scale)**

> Small side: 32mm  
> Medium side: 64mm  
> Large side: 128mm  
> Beam width: 4mm  
> Screw size: M2

*Rationale:* Lighter structure for limbs, appendages, or compact platforms.

These values serve as starting points. Custom parameters can be defined for specialized applications.
</div>
### **Interface Standards**
<div style={{ marginLeft: '2rem' }}>
SPOKE Structure uses **interface conformance** for compatibility:

**Frame-to-Frame Interfaces**  
Frames connect through standardized mating surfaces. Any frame presenting correct interface dimensions can connect to compatible frames, regardless of internal geometry.

**Frame-to-Panel Interfaces**  
Panels attach via standardized screw patterns and edge profiles. New panels work with existing frames when conforming to mounting interfaces.

**Example: Dual Wheel Bot**

> Cubic core frame (96 × 96 × 48mm)  
> Custom wheel mount frames with complex internal geometry  
> Specialized rear caster frame  
> All connect via standard 96 × 48mm interfaces  
> Panels include integrated PCB mounting rails
</div>
### **Extensibility**
<div style={{ marginLeft: '2rem' }}>
Structure is a starting point, not a constraint:

> **Direct use:** Build from verified standard components
> **Custom frames:** Create new geometries maintaining standard interfaces  
> **Custom panels:** Design specialized panels conforming to frame interfaces  
> **Full custom:** Define new dimensional standards for specialized applications
</div>
</div>

</details>


<details>
<summary>

## 2. Joints

</summary>

<div style={{ marginLeft: '2rem' }}>
### **The Role of Joints**

SPOKE Joints enable controlled motion through mechanical power transmission:

> **Rotation** \- Gears, pulleys, and direct drive systems  
> **Translation** \- Belt drives and linear actuators  
> **Articulation** \- Multi-axis motion for arms and mechanisms  
> **Actuation integration** \- Motor mounting and coupling

### **Motion Mechanisms**

**Gears**

> Standardized gear modules and tooth profiles  
> Mounting interfaces compatible with Structure frames  
> Protection housings for mesh zones  
> Integration with motor output shafts

**Belts and Pulleys**

> Timing belt systems for precise power transmission  
> Tensioning mechanisms built into mounting interfaces  
> Protective covers for moving belt sections  
> Motor and driven shaft adapters

**Direct Drive**

> Motor-to-shaft couplers  
> Integrated bearing support  
> Encoder mounting provisions  
> Cable routing for motor power and feedback

### **Bearings: Motion Support**

Bearings are integral to all joint mechanisms, providing low-friction motion support:

**Ball Bearings**

> Standard sizes (608, 6001, etc.) for common applications  
> Press-fit mounting into Structure components and joint assemblies  
> Shaft diameter compatibility with motors and mechanisms  
> Sealed options for protection from debris

**Linear Bearings**

> Rail and carriage systems for linear motion  
> Rod-based sliding mechanisms  
> Mounting to Structure frames  
> Integration with belt drives and actuators

**Bearing Integration in Joints:**

> Support shaft rotation in gear assemblies  
> Enable smooth motion in belt-driven systems  
> Reduce friction in articulated mechanisms  
> Mount directly into Structure frames with verified fit  
> Support wheel axles in mobility systems

### **Motor Integration**

Motors connect to the mechanical domain through verified interfaces:

> **Mounting:** Standardized motor mount patterns (NEMA sizes, custom brackets)  
> **Coupling:** Motor shaft to mechanism adapters (gears, pulleys, direct shafts)  
> **Protection:** Enclosed mounting prevents debris interference  
> **Integration:** Cable routing paths, connector accessibility

**Wheel Adapters** Specialized components connecting motors to wheels:

> Standardized hub patterns  
> Verified torque transmission  
> Bearing support integration  
> Multiple wheel diameter compatibility

### **Joint Protection and Mounting**

All joint mechanisms include:

> Protective housings for moving parts  
> Mounting interfaces to Structure frames  
> Cable routing for actuators and sensors  
> Maintenance access provisions  
> Bearing housings integrated into assemblies

</div>

</details>


<details>
<summary>

## 3. Wheels

</summary>

<div style={{ marginLeft: '2rem' }}>
### **The Role of Wheels**

SPOKE Wheels provide ground contact and mobility:

> **Traction** \- Material and tread patterns for various surfaces  
> **Mounting** \- Standardized hub interfaces  
> **Integration** \- Verified compatibility with motor adapters and bearings  
> **Protection** \- Guards for moving components

### **Wheel Types**

**Drive Wheels**

> Coupled to motors through wheel adapters  
> Various diameters for different speed/torque requirements  
> Tread patterns for specific terrain  
> Integrated encoder mounting options

**Caster Wheels**

> Omnidirectional support wheels  
> Bearing-supported swivel mechanisms  
> Multiple size options  
> Low-profile mounting to Structure frames

**Omni Wheels**

> Holonomic motion capability  
> Roller bearing arrays  
> Standardized mounting hubs  
> Compatible with standard motor adapters

### **Wheel-Motor-Structure Integration**

Complete verified integration path:

> Motor mounts to Structure frame  
> Wheel adapter couples motor shaft to wheel hub  
> Bearings support wheel rotation  
> Protective panels guard moving components  
> Cable routing maintains electrical connectivity

</div>

</details>


<details>
<summary>

## 4. Grippers

</summary>

<div style={{ marginLeft: '2rem' }}>
### **The Role of Grippers**

SPOKE Grippers provide end-effector manipulation capabilities:

> **Grasping** \- Secure holding of objects with various geometries  
> **Manipulation** \- Controlled positioning and orientation of held objects  
> **Sensing integration** \- Force/tactile sensor mounting for feedback  
> **Actuation coupling** \- Motor and servo integration for controlled motion

### **Gripper Types**

**Parallel Jaw Grippers**

> Two opposing fingers with linear motion  
> Adjustable grip width through mechanism design  
> Motor or servo actuation  
> Force sensing integration options

**Angular Grippers**

> Fingers rotate around pivot points  
> Variable grip geometry for different object shapes  
> Compact mounting footprint  
> Integrated actuation and position feedback

**Adaptive Grippers**

> Compliant fingers that conform to object shape  
> Multiple contact points for secure grasp  
> Underactuated mechanisms for simplicity  
> Robust grasping across object variations

**Custom End Effectors**

> Task-specific manipulation tools  
> Standardized mounting interface to Structure  
> Integration with motors/servos through Joint components  
> Custom finger geometries and actuation patterns

### **Gripper Integration**

Grippers connect to the mechanical system through verified interfaces:

> **Mounting:** Standardized attachment to Structure frames or arm endpoints  
> **Actuation:** Motor/servo coupling through Joint mechanisms  
> **Sensing:** Tactile sensor mounting surfaces and wiring paths  
> **Protection:** Finger guards and actuator enclosures

**Gripper-Motor-Structure Integration:**

> Gripper mechanism mounts to Structure frame or arm assembly  
> Motor/servo couples to gripper actuation mechanism  
> Bearings support smooth finger motion  
> Sensors integrate for force and position feedback  
> Cable routing maintains electrical connectivity

### **Gripper Protection and Assembly**

All gripper mechanisms include:

> Protective housings for moving parts  
> Standardized mounting to Structure or arm endpoints  
> Cable routing for motors, servos, and sensors  
> Access for finger replacement or adjustment  
> Modular finger designs for task-specific swapping

</div>

</details>
